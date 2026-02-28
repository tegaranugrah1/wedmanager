import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#f8f6f7] text-[#181115] font-sans antialiased overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#f4f0f3]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-[#e619a1]">
              <span className="material-symbols-outlined text-3xl">diamond</span>
            </div>
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[#181115]">WedManager</h2>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-[#181115] hover:text-[#e619a1] transition-colors text-sm font-medium" href="#features">Features</Link>
            <Link className="text-[#181115] hover:text-[#e619a1] transition-colors text-sm font-medium" href="#pricing">Pricing</Link>
            <Link className="text-[#181115] hover:text-[#e619a1] transition-colors text-sm font-medium" href="#testimonials">Testimonials</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:flex text-[#181115] hover:text-[#e619a1] text-sm font-bold px-4 py-2 transition-colors">
              Log In
            </Link>
            <Link href="/signup">
              <button className="flex items-center justify-center rounded-lg bg-[#e619a1] hover:bg-[#b0127a] text-white text-sm font-bold h-10 px-6 transition-all shadow-md hover:shadow-lg">
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full pt-16 pb-24 lg:pt-32 lg:pb-32 px-6">
          <div className="absolute inset-0 z-0 opacity-10 bg-repeat bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgpAG63eaedfx4kSe3x3PBKB-A7fs4j3NWGxoVcPrwdQjXxDHw08SNXnGMMcOx7tBXgLi3-ZpSnAMLIMcoRLBJPUpkEQJGVqHvL8JN8WKNdaP6WzvQKsqf6XBr3qNPZWAJMpfaCMZSWR-Pm-Du92iHOGU8_rJOco5Z7Twrjz6lDeTwZ-n1WFL5gCyaJanRqwVt2RNO0YGJMPcIrvvlWkZkUYGy-AFghhccemC4UUhXbs6ksfJ747q-xpET_mIr4LOyfrAjWNm66JS1')" }}></div>
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-[#fce7f5] text-[#e619a1] text-xs font-bold uppercase tracking-wider mb-6">
              The Premier Platform for Planners
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#181115] leading-tight tracking-tight mb-6 max-w-4xl">
              Orchestrate <span className="text-[#e619a1] italic">Unforgettable</span> Moments
            </h1>
            <p className="text-[#88637c] text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
              Manage luxury clients, intricate timelines, and bespoke budgets with effortless elegance. The all-in-one suite designed for the modern wedding artisan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/signup">
                <button className="flex items-center justify-center rounded-lg bg-[#e619a1] hover:bg-[#b0127a] text-white text-base font-bold h-12 px-8 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Start Your Free Trial
                </button>
              </Link>
            </div>
            
            {/* Dashboard Mockup */}
            <div className="w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden border border-[#e5dce2] bg-white relative">
              <div className="bg-gray-50 border-b border-gray-100 p-2 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="aspect-[16/9] bg-cover bg-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdPBrasqrk0SQ08U3ntL4nGUUFydEKiA2KIlpvz77blUn0Cs2dMyFZtjU6bIA1iFLoM4Cfoska1qyyHH3F9QYDoia1tRcj23rkzwxft_rnD3J4riXraOJKFgWDC5PFDSOLtZFRtLMlAbwu_mlg3NTMcLSfRl9wcQz3Rng28S00Ebs7t47VisTv9DNsN2koScNDVLqeErpcE-f6byN20nGxMxrX8p7wT5Z1K5OcHMyfBRbPeHUjRIolqUAmN33u6AhmiD750jd9wCed')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif italic text-2xl bg-gray-50/50 backdrop-blur-sm">
                  Dashboard Interface Preview
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#181115] mb-4">Refined Tools for Expert Planners</h2>
              <p className="text-[#88637c] text-lg max-w-2xl mx-auto">Everything you need to curate the perfect day, simplified into one sophisticated suite.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'groups', title: 'Client Management', desc: 'Streamline communication and track every detail of your client\'s vision in a centralized portal.' },
                { icon: 'calendar_month', title: 'Wedding Calendar', desc: 'Drag-and-drop scheduling designed specifically for the complexity of modern, multi-day weddings.' },
                { icon: 'inventory_2', title: 'Package Builder', desc: 'Create bespoke service packages that reflect your unique brand value and pricing structure.' },
                { icon: 'monitoring', title: 'Analytics', desc: 'Insightful data visualization to help you grow your business and refine your service offerings.' }
              ].map((feature, i) => (
                <div key={i} className="group p-6 rounded-xl border border-[#e5dce2] bg-[#f8f6f7] hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-[#fce7f5] text-[#e619a1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">{feature.icon}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#181115] mb-2">{feature.title}</h3>
                  <p className="text-[#88637c] text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Inspiration Section */}
        <section className="py-20 bg-[#f8f6f7] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#181115] mb-6 leading-tight">Designed for the Art of Celebration</h2>
                <p className="text-[#88637c] text-lg mb-8">
                  WedManager isn't just a tool; it's a canvas. We understand that wedding planning is as much about aesthetics as it is about logistics. Our platform empowers you to focus on the creative direction while we handle the fine print.
                </p>
                <ul className="flex flex-col gap-4">
                  {[
                    "Visual timeline creation",
                    "Moodboard integration",
                    "Vendor collaboration portal"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#e619a1]">check_circle</span>
                      <span className="text-[#181115] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 translate-y-8">
                    <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGP12kIxUCuuW_cdAK9D45mZYyWsgzsGNjRBM6D8VTezgHJGFihLTAbhXvWxuQIP79Gfs82wd_9Mnh4aZXpLRutrYUgjrLvSSC8Y7TXgHikh5IZoOfhGUZ66YEBb5wT-yPzM7-QprOrTBtAZmdbOoc6Um5FkMt3YB2l_2CieJRf6qPcXc_66VEFIhskMZoCqEMtxEoAOBXSFAz9GhuG4kgPDVTED6NImsZ3iWWAqkSXxCt8jMVskrl81Xne9glzuMtTZZcGE4vag2J')" }}></div>
                    <div className="rounded-lg overflow-hidden shadow-lg h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkWqXGaeXBN4tLlelvEWb_yFhanI9GDE6kgA56W6w73PSi1Q7a7SBUkMkpcvF1cRwfq5bgu-hB1rH85czkqs-55K_SSfOqikGTOjiiILfcIOxIxoRuZg8oFYWs8UKMjniB-kLI2nrc_wMiZ59Rd6f-oUonWleKMwrwSbwcfEJxaDuHy4qkfh62r_PhYv-5wWriJEdMDLmJH9zxP04iiXlRB_zwHGoetaWrNw_mRO9AbLKrbH0QCl__ly1uWTb3bXPswJDfkSvex2T0')" }}></div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden shadow-lg h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAeYzpQxZXqw69bA1_RL5CNKjtP_h_loCKlu7TeJ2gk0r_wEQ7XZLECZZl1yrnlkG1IaxujwPtjYHbwoG69n3Az0AjItLe0NhkuHUVLbRMcclXvjRvfY3bqw6QGjj0icXvfqXTH_KJKGKKuV7e3rrO0gTjX8ATY8dkQ2JghbF7XMg5C4OYINpEHxjJ1xBgGLufrgsqhaJpUMu5OyvQdRdsnRS0ZEbU6hzf3o_ddk8QtK3nb1cV5bNRrU7SzS93otjPfXhG-Y52sBigN')" }}></div>
                    <div className="rounded-lg overflow-hidden shadow-lg h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCl-Ot7mSt2C8AREieozHjnkaM6DkJCT9ysm_DkuKHS0m1BPHKAyXbedPOvVTpwDaY_coE5mAyPPemkbxYx7_8vlvI_7EWzD6YMa3klhzzI7pD1fV8CUY7idnNn2bRGVdm2dYJmbI0Eev-AFqeTFlcpYYkjDCHiUveGwDyJDm6Qdx2i03eqz6IBHEXSObAA7Li3SeDu_4oYCrffpUSqmzinr4kTrtMsqzKNALXPOvRAT7Gj2U6-3s1Kw7aM8UdtGnlpNDCcxAimrdLs')" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-white" id="pricing">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#181115] mb-4">Transparent Pricing for Every Stage</h2>
              <p className="text-[#88637c] text-lg">Choose the perfect plan to support your business growth.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Basic Plan */}
              <div className="flex flex-col p-6 rounded-2xl border border-[#e5dce2] bg-white hover:border-primary/30 transition-colors">
                <div className="mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#181115]">Basic</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold text-[#181115]">FREE</span>
                  </div>
                </div>
                <Link href="/signup" className="w-full">
                  <button className="w-full py-2 px-4 rounded-lg bg-[#f4f0f3] text-[#181115] font-bold text-sm hover:bg-[#eaddf0] transition-colors mb-6">
                    Start Now
                  </button>
                </Link>
                <ul className="flex flex-col gap-3 mb-auto">
                  {['Dashboard', 'Lead CRM', 'Calendar', 'Package Management', 'Vendors Management'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#181115]">
                      <span className="material-symbols-outlined text-[#e619a1] text-lg">check</span>
                      {feature}
                    </li>
                  ))}
                  {['Funnel automation', 'Landing page'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="material-symbols-outlined text-gray-300 text-lg">close</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col p-6 rounded-2xl border-2 border-[#e619a1] bg-white relative shadow-xl xl:scale-105 z-10">
                <div className="absolute top-0 right-0 -mt-3 mr-4 bg-[#e619a1] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                </div>
                <div className="mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#181115]">Pro</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold text-[#181115]">$49</span>
                    <span className="text-sm text-[#88637c] ml-1">/mo</span>
                  </div>
                </div>
                <Link href="/signup" className="w-full">
                  <button className="w-full py-2 px-4 rounded-lg bg-[#e619a1] text-white font-bold text-sm hover:bg-[#b0127a] transition-colors mb-6 shadow-md">
                    Start Trial
                  </button>
                </Link>
                <ul className="flex flex-col gap-3 mb-auto">
                  <li className="flex items-start gap-3 text-sm text-[#181115] font-medium">
                    <span className="material-symbols-outlined text-[#e619a1] text-lg">check</span>
                    Everything Basic
                  </li>
                  {['Funnel forms', 'Lead pipeline', 'Inquiry links', 'WAHA & n8n Add-ons'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#181115]">
                      <span className="material-symbols-outlined text-[#e619a1] text-lg">check</span>
                      {feature}
                    </li>
                  ))}
                  {['Landing page builder'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="material-symbols-outlined text-gray-300 text-lg">close</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium Plan */}
              <div className="flex flex-col p-6 rounded-2xl border border-[#e5dce2] bg-white hover:border-[#e619a1]/30 transition-colors">
                <div className="mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#181115]">Premium</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold text-[#181115]">$99</span>
                    <span className="text-sm text-[#88637c] ml-1">/mo</span>
                  </div>
                </div>
                <Link href="/signup" className="w-full">
                  <button className="w-full py-2 px-4 rounded-lg bg-[#f4f0f3] text-[#181115] font-bold text-sm hover:bg-[#eaddf0] transition-colors mb-6">
                      Start Trial
                  </button>
                </Link>
                <ul className="flex flex-col gap-3 mb-auto">
                  <li className="flex items-start gap-3 text-sm text-[#181115] font-medium">
                    <span className="material-symbols-outlined text-[#e619a1] text-lg">check</span>
                    Everything Pro
                  </li>
                  {['Landing page builder', 'Slug subdomain (sinta.wedmanager.app)'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#181115]">
                      <span className="material-symbols-outlined text-[#e619a1] text-lg">check</span>
                      {feature}
                    </li>
                  ))}
                  {['Custom domain'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="material-symbols-outlined text-gray-300 text-lg">close</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col p-6 rounded-2xl border border-[#e5dce2] bg-[#f8f6f7]">
                <div className="mb-4">
                  <h3 className="font-serif text-lg font-bold text-[#181115]">Enterprise</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-3xl font-bold text-[#181115]">Custom</span>
                  </div>
                </div>
                <button className="w-full py-2 px-4 rounded-lg bg-[#181115] text-white font-bold text-sm hover:bg-black transition-colors mb-6">
                    Contact Sales
                </button>
                <ul className="flex flex-col gap-3 mb-auto">
                  <li className="flex items-start gap-3 text-sm text-[#181115] font-medium">
                    <span className="material-symbols-outlined text-[#e619a1] text-lg">check</span>
                    Everything Premium
                  </li>
                  {['Custom domain', 'Custom dashboard', 'Automation included'].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#181115]">
                      <span className="material-symbols-outlined text-[#e619a1] text-lg">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-[#f8f6f7] border-y border-[#e5dce2]">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="material-symbols-outlined text-5xl text-[#e619a1]/30 mb-6">format_quote</span>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#181115] italic mb-8 leading-relaxed">
              "WedManager has completely transformed how I run my business. I spend 50% less time on administration and 100% more time creating magic for my couples. It's the silent partner I always needed."
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8IU8n2lhsBLgM6eU_-1NnypmUpkOa3kUQYLHL5FpBlkoADOP74qbU-BOnJPY92PuHqoUrWfpxYko-Jb7YRwFdzyqztIy4a04o8pFHKIYHkX1cm88GZG_Xz3iEMaF3AuuMDn5l9lqJldvS-RSZB9KSmi3292hE_Xhmys_wzqqe3_USP9K0k_jUNNLFt1hOvKY9gO2bV_7Yuqd0bm3K0cH9fAvkEF-OH53d9Q64dU1GiCG-EI7M_80owFbccYS7Fu_dVQff9RRieo1b')" }}></div>
              <div className="text-left">
                <p className="text-[#181115] font-bold text-sm">Sarah Jenkins</p>
                <p className="text-[#88637c] text-xs uppercase tracking-wide">Founder, Ethereal Events</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#181115] mb-6">Ready to Elevate Your Business?</h2>
            <p className="text-[#88637c] text-lg mb-10 max-w-2xl mx-auto">Join thousands of elite wedding planners who trust WedManager to orchestrate their success.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <button className="flex items-center justify-center rounded-lg bg-[#e619a1] hover:bg-[#b0127a] text-white text-base font-bold h-12 px-8 transition-all shadow-lg hover:shadow-xl">
                  Start Free Trial
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#21111c] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-[#e619a1] text-2xl">diamond</span>
                <span className="font-serif text-xl font-bold">WedManager</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The premier software solution for luxury wedding planners worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gray-200">Product</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link className="hover:text-[#e619a1] transition-colors" href="#features">Features</Link></li>
                <li><Link className="hover:text-[#e619a1] transition-colors" href="#pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gray-200">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a className="hover:text-[#e619a1] transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-[#e619a1] transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-gray-200">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a className="hover:text-[#e619a1] transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-[#e619a1] transition-colors" href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 WedManager Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
