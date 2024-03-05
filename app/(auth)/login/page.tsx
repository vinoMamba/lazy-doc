import { LoginForm } from "../_components/login-form";
import { PageWrapper } from "../_components/page-wrapper";

export default function LoginPage(){
  return (
    <PageWrapper backHref="/">
      <LoginForm/>
    </PageWrapper>
  )
}
