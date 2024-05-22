import { UserItem } from "@/components/auth/user-item";
import { Oops } from "@/components/oops";
import { ChangeEmailDialog } from "@/components/setting/change-email-dialog";
import { ChangePasswordDialog } from "@/components/setting/change-password-dialog";
import { SetterItem } from "@/components/setting/setter-item";
import { SubTitle } from "@/components/setting/sub-title";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getFirstLetter } from "@/lib/shared";
import { getToken } from "@/lib/token";
import { UserSchema } from "@/schema/user";

export default async function SettingPage() {
  const token = await getToken()

  if (!token) {
    return <Oops />
  }

  const res = await fetch(`${process.env.NEXT_API_URL}/user/info`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const result = await res.json()


  if (result && result.code === 0) {

    const validateValues = UserSchema.safeParse(result.data)
    if (!validateValues.success) {
      return <Oops />
    }
    return (
      <div className="flex flex-col gap-y-4">
        <SubTitle title="My profile" />
        <div className=" flex flex-col  gap-y-2">
          <UserItem user={validateValues.data} className=" h-16 w-16" />
          <Button variant="outline">Add photo</Button>
        </div>
        <SubTitle title="Account security" />
        <div className="flex flex-col gap-y-8">
          <SetterItem title="Email" subTitle={validateValues.data.email}>
            <ChangeEmailDialog email={validateValues.data.email} />
          </SetterItem>
          <SetterItem title="Password" subTitle="Set a permanent password to login to your account.">
            <ChangePasswordDialog />
          </SetterItem>
        </div>
      </div>
    )
  }

  return <Oops />
}
