"use client"
import { useForm } from "react-hook-form"
import { CardWrapper } from "./card-wrapper"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useTransition } from "react"
import { RegisterSchema } from "@/actions/register/schema"
import { toast } from "sonner"
import { registerAction } from "@/actions/register"
import { useAction } from "@/hooks/use-action"
import { User } from "@prisma/client"


export const RegisterForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    }
  })

  const { execute, isPending } = useAction<z.infer<typeof RegisterSchema>, User>(registerAction, {
    onSuccess: () => {
      toast.success("Account created successfully")
    },
    onError: (error) => {
      toast.error(error)
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    execute(values)
  }

  return (
    <CardWrapper
      headerLabel="Sign Up"
      backButtonHref="/login"
      backButtonLabel="Already have an account? Sign In."
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((values) => onSubmit(values))}
          className=" space-y-6"
        >
          <div className=" space-y-4">
            <FormField
              control={form.control}
              disabled={isPending}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="example" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          </div>
          <Button type="submit" className="w-full" disabled={isPending}>
            Sign Up
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
