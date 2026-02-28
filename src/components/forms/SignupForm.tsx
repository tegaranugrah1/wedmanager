"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signupAction } from "@/actions/auth";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
// Using native HTML elements for inputs to perfectly match the user's design

const signupSchema = z.object({
  tenantName: z.string().min(2, "WO Name must be at least 2 characters"),
  tenantSlug: z.string().min(2, "Slug must be at least 2 characters").regex(/^[a-z0-9-]+$/, "Only lowercase letters, numbers, and dashes allowed"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Please confirm your password"),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the Terms of Service",
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export function SignupForm() {
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      tenantName: "",
      tenantSlug: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    setError(null);
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("tenantName", values.tenantName);
    formData.append("tenantSlug", values.tenantSlug);
    formData.append("email", values.email);
    formData.append("password", values.password);

    try {
      const result = await signupAction(null, formData);
      if (result?.error) {
        setError(result.error);
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  // Generate slug dynamically from name
  const updateSlug = (name: string) => {
    if (!form.formState.dirtyFields.tenantSlug) {
      const generatedSlug = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      form.setValue("tenantSlug", generatedSlug, { shouldValidate: true });
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {error && <div className="text-red-500 text-sm font-medium bg-red-100 p-3 rounded-lg">{error}</div>}
          
          <FormField
            control={form.control}
            name="tenantName"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-slate-900 text-sm font-semibold">Wedding Organizer Name</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">business_center</span>
                  </div>
                  <FormControl>
                    <input 
                      {...field} 
                      onChange={(e) => {
                        field.onChange(e);
                        updateSlug(e.target.value);
                      }}
                      className="form-input block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e619a1]/20 focus:border-[#e619a1] transition-all duration-200" 
                      placeholder="e.g. Luxe Events Co." 
                      type="text"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="tenantSlug"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-slate-900 text-sm font-semibold">Workspace URL Slug</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">link</span>
                  </div>
                  <FormControl>
                    <input 
                      {...field} 
                      className="form-input block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e619a1]/20 focus:border-[#e619a1] transition-all duration-200" 
                      placeholder="luxe-events-co" 
                      type="text"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-slate-900 text-sm font-semibold">Email Address</FormLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <FormControl>
                    <input 
                      {...field} 
                      className="form-input block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e619a1]/20 focus:border-[#e619a1] transition-all duration-200" 
                      placeholder="name@example.com" 
                      type="email"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-slate-900 text-sm font-semibold">Password</FormLabel>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">lock</span>
                    </div>
                    <FormControl>
                      <input 
                        {...field} 
                        className="form-input block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e619a1]/20 focus:border-[#e619a1] transition-all duration-200" 
                        placeholder="••••••••" 
                        type="password"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="space-y-1.5">
                  <FormLabel className="text-slate-900 text-sm font-semibold">Confirm Password</FormLabel>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <span className="material-symbols-outlined text-[20px]">lock_reset</span>
                    </div>
                    <FormControl>
                      <input 
                        {...field} 
                        className="form-input block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#e619a1]/20 focus:border-[#e619a1] transition-all duration-200" 
                        placeholder="••••••••" 
                        type="password"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex items-center gap-2 pt-2 space-y-0">
                <FormControl>
                  <input 
                    type="checkbox"
                    checked={field.value}
                    onChange={field.onChange}
                    className="rounded border-slate-300 text-[#e619a1] focus:ring-[#e619a1] h-4 w-4" 
                    id="terms" 
                  />
                </FormControl>
                <label className="text-sm text-slate-500" htmlFor="terms">
                  I agree to the <Link className="text-[#e619a1] hover:underline" href="#">Terms of Service</Link> and <Link className="text-[#e619a1] hover:underline" href="#">Privacy Policy</Link>.
                </label>
                <FormMessage className="ml-2" />
              </FormItem>
            )}
          />

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[#e619a1] hover:bg-[#b05d85] text-white font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-[#e619a1]/25 hover:shadow-[#e619a1]/40 transition-all duration-300 mt-2 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <span>{isSubmitting ? "Creating Account..." : "Create Account"}</span>
            {!isSubmitting && <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>}
          </button>
        </form>
      </Form>

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
          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
          </svg>
          X
        </button>
      </div>
    </>
  );
}
