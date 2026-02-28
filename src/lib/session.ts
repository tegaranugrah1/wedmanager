import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = new TextEncoder().encode(process.env.SESSION_SECRET || "default_secret_key");

export async function createSession(userId: string, role: string, tenantId: string | null, tenantSlug: string | null) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days
  const token = await new SignJWT({ userId, role, tenantId, tenantSlug })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secretKey);

  const cookieStore = await cookies();
  cookieStore.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function verifySession(token: string) {
  try {
    const { payload } = await jwtVerify(token, secretKey);
    return payload as {
      userId: string;
      role: string;
      tenantId: string | null;
      tenantSlug: string | null;
    };
  } catch {
    return null;
  }
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
