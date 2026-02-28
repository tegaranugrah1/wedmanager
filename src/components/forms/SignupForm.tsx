"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signupAction } from "@/actions/auth";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const signupSchema = z.object({
  tenantName: z.string().min(2, "WO Name must be at least 2 characters"),
  tenantSlug: z.string().min(2, "Slug must be at least 2 characters").regex(/^[a-z0-9-]+$/, "Only lowercase letters, numbers, and dashes allowed"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function SignupForm() {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      tenantName: "",
      tenantSlug: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    setError(null);
    const formData = new FormData();
    formData.append("tenantName", values.tenantName);
    formData.append("tenantSlug", values.tenantSlug);
    formData.append("email", values.email);
    formData.append("password", values.password);

    const result = await signupAction(null, formData);
    if (result?.error) {
      setError(result.error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {error && <div className="text-red-500 text-sm font-medium">{error}</div>}
        
        <FormField
          control={form.control}
          name="tenantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wedding Organizer Name</FormLabel>
              <FormControl>
                <Input placeholder="Beautiful Weddings" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tenantSlug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workspace Slug</FormLabel>
              <FormControl>
                <Input placeholder="beautiful-weddings" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Admin Email</FormLabel>
              <FormControl>
                <Input placeholder="admin@beautifulweddings.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Create Workspace
        </Button>
      </form>
    </Form>
  );
}
