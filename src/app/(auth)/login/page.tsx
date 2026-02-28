import { LoginForm } from "@/components/forms/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { CalendarHeart } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <Link href="/" className="flex items-center gap-2 mb-6 text-slate-900">
          <CalendarHeart className="h-8 w-8 text-indigo-600" />
          <span className="text-2xl font-bold">WedManager</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
          Sign in to your workspace
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="shadow-lg border-0 ring-1 ring-slate-200">
          <CardHeader>
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        
        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Start your free trial
          </Link>
        </p>
      </div>
    </div>
  );
}
