"use client"

import { LoginSchema } from "@/schema/auth"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { CardWrapper } from "./card-wrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { loginAction } from "@/action/login"
import { useAction } from "@/hooks/use-action"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const LoginForm = () => {
  const router = useRouter()
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const { execute, isPending } = useAction<z.infer<typeof LoginSchema>, null>(loginAction, {
    onSuccess: () => {
      toast.success("Successfully logged in.")
      router.push("/project")
    },
    onError: (error) => {
      toast.error(error)
    }
  })


  return (
    <CardWrapper
      headerLabel="Sign In"
      backButtonHref="/register"
      backButtonLabel="Don't have an account? Sign Up."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(values => execute(values))}>
          <div className=" space-y-4">
            <FormField
              control={form.control}
              disabled={isPending}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="example@gmail.com" type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="******" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isPending}>
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  )
}
