"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginAction } from "@/actions/auth";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  remember: z.boolean().optional(),
});

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setError(null);
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    try {
      const result = await loginAction(null, formData);
      if (result?.error) {
        setError(result.error);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {error && <div className="text-red-500 text-sm font-medium bg-red-100 p-3 rounded-lg text-center">{error}</div>}
        
        {/* Email Input */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <label className="text-slate-700 text-sm font-semibold" htmlFor="email">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <FormControl>
                  <input 
                    {...field}
                    id="email" 
                    type="email" 
                    placeholder="planner@wedmanager.com" 
                    className="form-input w-full pl-10 pr-4 py-3 bg-slate-50 border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#e619a1]/20 focus:border-[#e619a1] transition-all duration-200 text-sm" 
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Password Input */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2 space-y-0">
              <div className="flex justify-between items-center">
                <label className="text-slate-700 text-sm font-semibold" htmlFor="password">Password</label>
                <Link className="text-[#e619a1] hover:text-[#e619a1]/80 text-xs font-medium transition-colors" href="#">Forgot Password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">key</span>
                </div>
                <FormControl>
                  <input 
                    {...field}
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="form-input w-full pl-10 pr-4 py-3 bg-slate-50 border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#e619a1]/20 focus:border-[#e619a1] transition-all duration-200 text-sm" 
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Remember Me */}
        <FormField
          control={form.control}
          name="remember"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2 space-y-0">
              <FormControl>
                <input 
                  type="checkbox"
                  checked={field.value}
                  onChange={field.onChange}
                  className="rounded border-slate-300 text-[#e619a1] focus:ring-[#e619a1]/20 w-4 h-4 cursor-pointer" 
                  id="remember" 
                />
              </FormControl>
              <label className="text-slate-600 text-sm cursor-pointer select-none" htmlFor="remember">Remember me for 30 days</label>
            </FormItem>
          )}
        />
        
        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="mt-2 w-full bg-[#e619a1] hover:bg-[#b0127a] text-white font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-[#e619a1]/25 transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{isSubmitting ? "Signing in..." : "Sign In"}</span>
          {!isSubmitting && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
        </button>
      </form>
    </Form>
  );
}
