"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAction } from "@/hooks/use-action"
import { toast } from "sonner"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Keyboard } from "lucide-react"
import { UpdatePasswordSchema } from "@/schema/user"
import { updatePasswordAction } from "@/action/settings"
import { logout } from "@/action/logout"
import { cn } from "@/lib/utils"

export const ChangePasswordDialog = () => {

  const form = useForm<z.infer<typeof UpdatePasswordSchema>>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues: {
      password:"",
      newPassword: "",
    }
  })
  const { isPending, execute } = useAction<z.infer<typeof UpdatePasswordSchema>, null>(updatePasswordAction, {
    onError(error) {
      toast.error(error)
    },
    onSuccess() {
      toast.success("Password updated")
      logout()
    }
  })
  return (
    <Dialog>
      <DialogTrigger>
        <span className={cn(buttonVariants({size:'sm'}))}>Change password</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <div className=" flex flex-col items-center justify-center gap-2 text-center">
            <Keyboard />
            <p className=" font-semibold">Change password</p>
            <span className=" text-muted-foreground text-sm">Use a password at least 15 letters long, or at least 8 characters long with both letters and numbers.</span>
          </div>
        </DialogHeader>
        <Alert variant="destructive">
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>
            You will be logged out after changing your password.
          </AlertDescription>
        </Alert>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => execute(values))}
            className=" space-y-6"
          >
            <FormField
              control={form.control}
              name="password"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Please enter your old password.</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter you old password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter a new password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Enter a new password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm your new password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Confirm your new password" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Change password
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
