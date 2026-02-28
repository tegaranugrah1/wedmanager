import { SignupForm } from "@/components/forms/SignupForm";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="bg-[#fdfbfb] text-slate-900 antialiased h-screen flex flex-col font-sans overflow-hidden">
      {/* Navbar */}
      <header className="w-full border-b border-[#f4f0f3] px-6 py-4 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-[#e619a1] size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">diamond</span>
            </div>
            <h2 className="text-slate-900 text-xl font-serif font-bold tracking-tight">WedManager</h2>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-slate-600 hover:text-[#e619a1] text-sm font-medium transition-colors">
              Log In
            </Link>
            <Link href="/signup" className="hidden sm:block">
               <button className="bg-[#e619a1] hover:bg-[#b05d85] text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md shadow-[#e619a1]/20 hover:shadow-[#e619a1]/40">
                  Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
        {/* Abstract Background Decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#e8b4ce]/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent"></div>
        </div>

        <div className="w-full max-w-[1000px] h-[calc(100vh-8rem)] flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative z-10 border border-slate-100">
          {/* Left Side: Image/Branding */}
          <div className="hidden md:flex md:w-5/12 relative bg-slate-900">
            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWoppBDP5SR1-6ooQdtQ01g8iH5bAB5rl4ekRu4xKXuW6XQzeIHuyJIP31dDAo1wQmHu5o_vYt56kQeqL3G3J1TMCwwmXOgwzRgwXFy_Q36qvznyNswFXlnkf5jsKYA31FgLa2S7XPdavehkvsuSSmZ5pNnEE73FIIp-vNMiV9g_HCAkEA-cVyVrlFCHPooS9NwiwUf76Kr2RG8F2IOPT7S0FA3w_YMYX3nvsfIEUD8Tm_JTs4D_bSIfdX25MXV0FfWbDT7vO8ZW1g')" }}></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-10">
              <div className="text-[#d4af37] mb-2">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <blockquote className="text-white font-serif text-2xl leading-snug mb-4">
                &quot;The ultimate tool for orchestrating unforgettable moments.&quot;
              </blockquote>
              <p className="text-white/70 text-sm">Trusted by over 4,000 premium organizers worldwide.</p>
            </div>
          </div>

          {/* Right Side: Signup Form */}
          <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col overflow-y-auto">
            <div className="max-w-md mx-auto w-full my-auto">
              <div className="mb-10 text-center md:text-left">
                <h1 className="text-slate-900 text-4xl font-serif font-bold mb-3 tracking-tight">Begin Your Journey</h1>
                <p className="text-slate-500 text-base">Create your WedManager account to start planning.</p>
              </div>
              
              <SignupForm />

              <p className="mt-8 text-center text-sm text-slate-500">
                Already have an account? <Link href="/login" className="text-[#e619a1] hover:underline font-semibold">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full py-6 text-center text-slate-400 text-xs relative z-10">
        <p>© 2026 WedManager Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
