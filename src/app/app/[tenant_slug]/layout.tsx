import { TenantSidebar } from "@/components/layouts/TenantSidebar";
import { TenantTopbar } from "@/components/layouts/TenantTopbar";
import { prisma } from "@/lib/prisma";
import { verifySession } from "@/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function TenantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { tenant_slug: string };
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) redirect("/login");

  const session = await verifySession(token);
  if (!session) redirect("/login");

  if (session.role !== "SUPERADMIN" && session.tenantSlug !== params.tenant_slug) {
    redirect("/login");
  }

  // Fetch Tenant details for the Topbar
  const tenant = await prisma.tenant.findUnique({
    where: { slug: params.tenant_slug },
    include: { subscriptions: true }
  });

  if (!tenant) return <div>Tenant Not Found</div>;

  const planTier = tenant.subscriptions[0]?.plan_tier || "BASIC";

  return (
    <div className="flex min-h-screen bg-slate-50 w-full">
      <TenantSidebar tenantSlug={tenant.slug} />
      <div className="flex-1 flex flex-col">
        <TenantTopbar tenantName={tenant.name} planTier={planTier} />
        <main className="flex-1 overflow-auto p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
