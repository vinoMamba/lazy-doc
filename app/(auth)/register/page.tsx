import { PageWrapper } from "../_components/page-wrapper";
import { RegisterForm } from "../_components/register-form";

export default function RegisterPage() {
  return (
    <PageWrapper backHref="/login">
      <RegisterForm />
    </PageWrapper>
  )
}
