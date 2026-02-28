import { LoginForm } from "@/components/forms/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-[#f8f6f7] text-slate-900 antialiased min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-slate-200 px-6 py-4 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-8 text-[#e619a1] flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">diamond</span>
          </div>
          <h2 className="text-slate-900 text-xl font-bold leading-tight tracking-tight">WedManager</h2>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <Link className="text-slate-600 hover:text-[#e619a1] transition-colors text-sm font-medium" href="/#features">Platform</Link>
            <Link className="text-slate-600 hover:text-[#e619a1] transition-colors text-sm font-medium" href="/#testimonials">Stories</Link>
            <Link className="text-slate-600 hover:text-[#e619a1] transition-colors text-sm font-medium" href="/#pricing">Pricing</Link>
          </nav>
          <div className="flex gap-3">
            <Link href="/signup">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 border border-slate-200 bg-transparent text-slate-900 hover:bg-slate-50 transition-colors text-sm font-bold">
                <span className="truncate">Sign Up</span>
              </button>
            </Link>
            <Link href="/login">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-[#e619a1] hover:bg-[#b0127a] transition-colors text-white text-sm font-bold shadow-lg shadow-[#e619a1]/20">
                <span className="truncate">Login</span>
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWoppBDP5SR1-6ooQdtQ01g8iH5bAB5rl4ekRu4xKXuW6XQzeIHuyJIP31dDAo1wQmHu5o_vYt56kQeqL3G3J1TMCwwmXOgwzRgwXFy_Q36qvznyNswFXlnkf5jsKYA31FgLa2S7XPdavehkvsuSSmZ5pNnEE73FIIp-vNMiV9g_HCAkEA-cVyVrlFCHPooS9NwiwUf76Kr2RG8F2IOPT7S0FA3w_YMYX3nvsfIEUD8Tm_JTs4D_bSIfdX25MXV0FfWbDT7vO8ZW1g')" }}></div>
          <div className="absolute inset-0 bg-[#f8f6f7]/40 backdrop-blur-[2px]"></div>
          {/* Gradient Overlay for better readability */}
          <div className="absolute inset-0 bg-linear-to-t from-[#f8f6f7]/80 via-transparent to-transparent"></div>
        </div>

        {/* Login Card Container */}
        <div className="relative z-10 w-full flex items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
            {/* Card Header */}
            <div className="px-8 pt-10 pb-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e619a1]/10 mb-4 text-[#e619a1]">
                <span className="material-symbols-outlined text-2xl">lock</span>
              </div>
              <h1 className="text-slate-900 text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
              <p className="text-slate-500 text-base">Log in to manage your luxury weddings.</p>
            </div>

            {/* Login Form */}
            <div className="px-8 pb-10">
              <LoginForm />

              {/* Divider */}
              <div className="relative my-6 mt-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400">Or continue with</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700" type="button">
                  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M12.0003 20.45c4.6667 0 8.45-3.7833 8.45-8.45 0-4.6667-3.7833-8.45-8.45-8.45-4.6667 0-8.45 3.7833-8.45 8.45 0 4.6667 3.7833 8.45 8.45 8.45Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M12.0003 15.6667V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M12.0003 8.33333H12.0103" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <span>Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700" type="button">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 3.58 8 8 8.59V13H5.61v-3h2.39V7.72c0-2.2 1.54-3.41 3.55-3.41 1.07 0 2.03.05 2.03.05v2.21h-1.14c-1.12 0-1.47.69-1.47 1.4v1.8h2.6l-.42 3h-2.18v5.59c4.42-.59 8-4.17 8-8.59 0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>

              {/* Footer text */}
              <div className="text-center text-sm">
                <span className="text-slate-500">Don&apos;t have an account?</span>
                <Link className="text-[#e619a1] hover:text-[#b0127a] font-semibold ml-1 transition-colors" href="/signup">Create Account</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 relative z-10 w-full">
        <div className="max-w-[960px] mx-auto px-4 text-center">
          <p className="text-slate-400 text-xs">
            © 2026 WedManager Inc. All rights reserved. <br className="sm:hidden"/>
            <span className="hidden sm:inline"> | </span>
            <Link className="hover:text-[#e619a1] transition-colors" href="#">Privacy Policy</Link>
            <span className="hidden sm:inline"> | </span>
            <Link className="hover:text-[#e619a1] transition-colors" href="#">Terms of Service</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
