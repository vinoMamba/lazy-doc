import { AuthPageWrapper } from "@/components/auth/auth-page-wrapper";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <AuthPageWrapper backHref="/">
      <LoginForm />
    </AuthPageWrapper>
  )
}
