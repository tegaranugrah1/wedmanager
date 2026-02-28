import { LoginForm } from "@/components/forms/LoginForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-[#fdfbfb] text-slate-900 antialiased min-h-screen flex flex-col font-sans">
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
            <Link href="/login" className="hidden sm:block">
               <button className="bg-[#e619a1] hover:bg-[#b05d85] text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-md shadow-[#e619a1]/20 hover:shadow-[#e619a1]/40">
                  Log In
              </button>
            </Link>
            <Link href="/signup" className="text-slate-600 hover:text-[#e619a1] text-sm font-medium transition-colors">
              Sign Up
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

        <div className="w-full max-w-[1000px] flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden relative z-10 border border-slate-100">
          {/* Left Side: Image/Branding */}
          <div className="hidden md:flex md:w-5/12 relative bg-slate-900">
             {/* Note: User requested the background from signup page on login instead */}
            <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC3J6yfpnwp4zsaxOyXmdq5o-VU4NUMsKgsilyLaExsGBKdjxN-Go7X5mOPHlVC9mugo4kLLhtqIUvBfZeVC79Lw0iJmYwyneYfCFvOuFDqmOlMs3PlV-JAmD-gr9y_8JGGbQtGUGXT_AWWH1dW6Am1mT-Hi88VSqCEg7v00JfxPMS81e07aNYrfVp8_ZXDPBGWwJiUtePoki6y3NisqsygHYoa96dOO6xug6jyh-Q72X0cTSbTDDaKAtkc3kUcL9LeRyofdkwfJFua')" }}></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-10">
              <div className="text-[#d4af37] mb-2">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <blockquote className="text-white font-serif text-2xl leading-snug mb-4">
                &quot;The ultimate tool for orchestrating unforgettable moments.&quot;
              </blockquote>
              <p className="text-white/70 text-sm">Welcome back to your dashboard.</p>
            </div>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full md:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="mb-10 text-center md:text-left">
                <h1 className="text-slate-900 text-4xl font-serif font-bold mb-3 tracking-tight">Welcome Back</h1>
                <p className="text-slate-500 text-base">Log in to manage your luxury weddings.</p>
              </div>
              
              <LoginForm />

              <div className="relative mt-8 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-slate-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <button className="flex items-center justify-center w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-2.5 px-4 rounded-lg transition-colors" type="button">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-2.5 px-4 rounded-lg transition-colors" type="button">
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 3.58 8 8 8.59V13H5.61v-3h2.39V7.72c0-2.2 1.54-3.41 3.55-3.41 1.07 0 2.03.05 2.03.05v2.21h-1.14c-1.12 0-1.47.69-1.47 1.4v1.8h2.6l-.42 3h-2.18v5.59c4.42-.59 8-4.17 8-8.59 0-5.523-4.477-10-10-10z" fillRule="evenodd"></path>
                  </svg>
                  Facebook
                </button>
              </div>

              <p className="mt-8 text-center text-sm text-slate-500">
                Don&apos;t have an account? <Link href="/signup" className="text-[#e619a1] hover:underline font-semibold">Sign up</Link>
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
