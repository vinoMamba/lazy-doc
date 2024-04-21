import { AuthPageWrapper } from "@/components/auth/auth-page-wrapper";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthPageWrapper backHref="/login">
      <RegisterForm />
    </AuthPageWrapper>
  )
}
