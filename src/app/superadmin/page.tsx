import { Building2 } from "lucide-react";

export default function SuperadminDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50 w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-6">
        <Building2 className="h-6 w-6 text-indigo-600" />
        <h1 className="text-lg font-semibold text-slate-900">WedManager Superadmin</h1>
      </header>
      <main className="flex-1 p-6 md:p-8">
        <div className="flex items-center justify-between space-y-2 mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Tenant Manager</h2>
            <p className="text-slate-500">Manage all registered Wedding Organizer workspaces.</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2">
            Add Tenant
          </button>
        </div>

        {/* Tenant Table Shell Placeholder */}
        <div className="border rounded-lg bg-white overflow-hidden shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Tenant Name</th>
                <th className="px-6 py-4">Slug</th>
                <th className="px-6 py-4">Plan</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-medium text-slate-900">Example Weddings</td>
                <td className="px-6 py-4 font-mono text-slate-500 text-xs">example-wo</td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">BASIC</span></td>
                <td className="px-6 py-4"><span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">Active</span></td>
                <td className="px-6 py-4 text-right font-medium text-indigo-600 hover:underline cursor-pointer">Edit</td>
              </tr>
            </tbody>
          </table>
          
          <div className="p-4 border-t text-center text-sm text-slate-500 bg-slate-50">
            End of demo table. Database integration will populate this.
          </div>
        </div>
      </main>
    </div>
  );
}
