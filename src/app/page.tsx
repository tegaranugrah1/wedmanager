import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarHeart, CheckCircle2, LayoutDashboard, Globe, Users } from "lucide-react";

export default function MarketingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      
      {/* Navigation */}
      <header className="px-6 lg:px-8 h-16 flex items-center justify-between border-b bg-white border-slate-200">
        <Link className="flex items-center justify-center gap-2" href="/">
          <CalendarHeart className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-xl tracking-tight">WedManager</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors hidden sm:block" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-indigo-600 transition-colors hidden sm:block" href="#pricing">
            Pricing
          </Link>
          <div className="flex items-center gap-3 border-l pl-4 ml-2 border-slate-200">
            <Link className="text-sm font-medium hover:text-indigo-600 transition-colors" href="/login">
              Login
            </Link>
            <Link href="/signup">
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-48 flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm text-indigo-600 font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
              The ultimate OS for Wedding Organizers
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl text-slate-900">
              Manage Weddings Without the Chaos
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              All-in-one scalable platform for Wedding Organizers. From lead capture funnels to event workflows, and even your own custom landing page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
              <Link href="/signup">
                <Button size="lg" className="h-12 px-8 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-base font-semibold transition-all hover:scale-105 shadow-md">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg" className="h-12 w-full sm:w-auto px-8 rounded-full text-base border-slate-200 hover:bg-slate-100 font-semibold shadow-sm text-slate-700">
                  Login to Workspace
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Placeholder */}
        <section id="features" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Everything you need</h2>
              <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed">Automate your WO operational workflow end-to-end.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Smart Dashboard', icon: LayoutDashboard, desc: 'Track leads, revenues, and upcoming events in one glance.' },
                { title: 'Custom Landing Pages', icon: Globe, desc: 'Create your elegant WO company profile websites instantly.' },
                { title: 'Client Portals', icon: Users, desc: 'Let your brides follow progress and vendor checklists seamlessly.' }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                  <div className="p-3 bg-indigo-100 rounded-xl mb-4 text-indigo-600">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-500">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Placeholder */}
        <section id="pricing" className="w-full py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Pricing Plans</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { name: 'Basic', price: 'Free', features: ['Dashboard', 'Lead CRM', 'Calendar', 'Package Management'] },
                { name: 'Pro', price: '$49/mo', features: ['Everything Basic', 'Funnel Forms', 'WhatsApp Automation'] },
                { name: 'Premium', price: '$99/mo', features: ['Everything Pro', 'Landing Page Builder', 'Custom Subdomain'] }
              ].map((plan, i) => (
                <div key={i} className={`flex flex-col p-8 bg-white border rounded-3xl ${plan.name === 'Pro' ? 'border-indigo-600 ring-2 ring-indigo-600 ring-offset-2 relative' : 'border-slate-200'}`}>
                  {plan.name === 'Pro' && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">Most Popular</span>
                  )}
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-4 mb-6">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-indigo-500 mr-2 shrink-0" />
                        <span className="text-slate-600">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.name === 'Pro' ? 'default' : 'outline'} className={`w-full rounded-full ${plan.name === 'Pro' ? 'bg-indigo-600 hover:bg-indigo-700' : ''}`}>
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="w-full py-6 border-t bg-white flex flex-col sm:flex-row justify-center items-center px-4 md:px-6">
        <p className="text-xs text-slate-500">© 2026 WedManager Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
