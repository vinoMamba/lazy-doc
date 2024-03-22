"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useSettingsDialog } from "@/hooks/use-settings-dialog"
import { Separator } from "@/components/ui/separator"
import { useCurrentUser } from "@/hooks/use-current-user"
import { UserItem } from "@/components/user-item"
import { CircleUserRound } from "lucide-react"
import { ScrollArea } from "./ui/scroll-area"
import { SubTitle } from "./sub-title"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { getFirstLetter } from "@/lib/shared"
import { Button } from "./ui/button"
import { SetterItem } from "./setter-item"
import { usepasswordDialog } from "@/hooks/use-password-dialog"
import { useEmailDialog } from "@/hooks/use-email-dialog"

export const SettingsDialog = () => {
  const [isOpen, onClose] = useSettingsDialog(s => [s.isOpen, s.onClose])
  const [onPasswordOpen] = usepasswordDialog(s => [s.onOpen])
  const [onEmailOpen] = useEmailDialog(s => [s.onOpen])
  const user = useCurrentUser()
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Account</DialogTitle>
        </DialogHeader>
        <Separator className=" space-y-4" />
        <div className="flex gap-x-5">
          <aside className="min-w-[240px] flex flex-col gap-y-4">
            <div className=" px-2">
              <UserItem user={user} />
            </div>
            <div className=" bg-muted px-4 py-2 rounded-md flex items-center gap-x-2 cursor-pointer">
              <CircleUserRound />
              My account
            </div>
          </aside>
          <Separator orientation="vertical" />
          <ScrollArea className="h-[600px] w-full ">
            <div className="flex flex-col gap-y-4">
              <SubTitle title="My profile" />
              <div className=" flex flex-col  gap-y-2">
                <Avatar className=" h-16 w-16">
                  <AvatarImage src={user?.image || ""} />
                  <AvatarFallback>
                    {getFirstLetter(user?.name)}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline">Add photo</Button>
              </div>
              <SubTitle title="Account security" />
              <div className="flex flex-col gap-y-2">
                <SetterItem title="Email" subTitle={user?.email}>
                  <Button onClick={() => onEmailOpen(user?.email)}>Change email</Button>
                </SetterItem>
                <SetterItem title="Password" subTitle="Set a permanent password to login to your account.">
                  <Button onClick={onPasswordOpen}>Change password</Button>
                </SetterItem>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
