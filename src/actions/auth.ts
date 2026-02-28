"use server"

import { z } from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  tenantName: z.string().min(2),
  tenantSlug: z.string().min(2).regex(/^[a-z0-9-]+$/),
});

export async function signupAction(prevState: unknown, formData: FormData) {
  const result = signupSchema.safeParse(Object.fromEntries(formData));
  
  if (!result.success) {
    return { error: "Invalid form data" };
  }

  const { email, password, tenantName, tenantSlug } = result.data;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) return { error: "Email already taken" };

    const existingTenant = await prisma.tenant.findUnique({ where: { slug: tenantSlug } });
    if (existingTenant) return { error: "Tenant slug already taken" };

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.$transaction(async (tx) => {
      const tenant = await tx.tenant.create({
        data: {
          name: tenantName,
          slug: tenantSlug,
        }
      });

      await tx.subscription.create({
        data: {
          tenant_id: tenant.id,
          plan_tier: "BASIC"
        }
      });

      return await tx.user.create({
        data: {
          email,
          password_hash: hashedPassword,
          role: "TENANT_ADMIN",
          tenant_id: tenant.id,
        }
      });
    });

    await createSession(user.id, user.role, user.tenant_id, tenantSlug);
  } catch {
    return { error: "Something went wrong" };
  }

  redirect(`/app/${tenantSlug}`);
}

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function loginAction(prevState: unknown, formData: FormData) {
  const result = loginSchema.safeParse(Object.fromEntries(formData));
  
  if (!result.success) {
    return { error: "Invalid credentials" };
  }

  const { email, password } = result.data;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { tenant: true }
    });

    if (!user) return { error: "Invalid credentials" };

    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) return { error: "Invalid credentials" };

    await createSession(user.id, user.role, user.tenant_id, user.tenant?.slug || null);
    
    if (user.role === "SUPERADMIN") {
      redirect("/superadmin");
    } else {
      if (!user.tenant?.slug) return { error: "Tenant not found for this user" };
      redirect(`/app/${user.tenant.slug}`);
    }
  } catch (error) {
    // If redirect throws, it needs to be caught or let bubble up, Next.js handles it.
    if ((error as Error).message === "NEXT_REDIRECT") throw error;
    return { error: "Something went wrong logging in" };
  }
}

export async function logoutAction() {
  await deleteSession();
  redirect("/login");
}
