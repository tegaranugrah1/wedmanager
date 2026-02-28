import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CalendarDays, DollarSign, Activity } from "lucide-react";

export default function TenantDashboard({ params: _params }: { params: { tenant_slug: string } }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Overview of your wedding organizer operations.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Metric Cards Placeholders */}
        <Card className="shadow-none border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-slate-400 mt-1">+2 from last month</p>
          </CardContent>
        </Card>
        <Card className="shadow-none border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Upcoming Events</CardTitle>
            <CalendarDays className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-slate-400 mt-1">In the next 30 days</p>
          </CardContent>
        </Card>
        <Card className="shadow-none border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rp0</div>
            <p className="text-xs text-slate-400 mt-1">Beta placeholder</p>
          </CardContent>
        </Card>
        <Card className="shadow-none border-slate-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Active Vendors</CardTitle>
            <Activity className="h-4 w-4 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-slate-400 mt-1">Registered partners</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Recent Inquiries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-slate-500 py-8 text-center bg-slate-50 rounded-lg">
              No recent leads. Direct prospects to your funnel link to get started.
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg">Next Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-slate-500 py-8 text-center bg-slate-50 rounded-lg">
              Your agenda is empty. Connect a calendar to view schedule.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
