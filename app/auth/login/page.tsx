import { LoginForm } from "@/components/login-form";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <h1 className="text-5xl font-bold">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
