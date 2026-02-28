"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  Package,
  Store,
  Globe,
  Settings,
  ShieldAlert,
} from "lucide-react";

const routes = [
  { name: "Dashboard", href: "", icon: LayoutDashboard },
  { name: "Leads", href: "/leads", icon: Users },
  { name: "Calendar", href: "/calendar", icon: CalendarDays },
  { name: "Packages", href: "/packages", icon: Package },
  { name: "Vendors", href: "/vendors", icon: Store },
  { name: "Landing Page", href: "/builder", icon: Globe },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function TenantSidebar({ tenantSlug }: { tenantSlug: string }) {
  const pathname = usePathname();
  const basePath = `/app/${tenantSlug}`;

  return (
    <aside className="w-64 border-r bg-white flex flex-col h-full min-h-screen">
      <div className="h-16 flex items-center px-6 border-b">
        <ShieldAlert className="w-6 h-6 text-indigo-600 mr-2" />
        <span className="font-bold text-lg">{tenantSlug}</span>
      </div>
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {routes.map((route) => {
          const fullHref = `${basePath}${route.href}`;
          // exact match for dashboard, startswith for others
          const isActive = route.href === "" ? pathname === basePath : pathname.startsWith(fullHref);

          return (
            <Link
              key={route.name}
              href={fullHref}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              )}
            >
              <route.icon className="w-5 h-5" />
              {route.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
