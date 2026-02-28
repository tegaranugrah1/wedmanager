"use client";

import { LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TenantTopbar({ tenantName, planTier }: { tenantName: string, planTier: string }) {
  return (
    <header className="h-16 border-b bg-white flex items-center justify-between px-6 sticky top-0 z-10 w-full">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold capitalize text-slate-800">{tenantName}</h2>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 border border-indigo-200">
          {planTier} PLAN
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-slate-500 rounded-full">
          <User className="h-5 w-5" />
        </Button>
        <form action="/api/auth/logout" method="POST">
             {/* We can also just use a Link to a minimal form component, or direct server action if wrapped in form */}
             <Button variant="outline" size="sm" type="submit" className="text-slate-600 border-slate-200">
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
             </Button>
        </form>
      </div>
    </header>
  );
}
