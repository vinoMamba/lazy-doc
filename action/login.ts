"use server"

import { LoginSchema } from "@/schema/auth";
import { cookies } from "next/headers";
import { z } from "zod";

export const loginAction: Action<z.infer<typeof LoginSchema>> = async (values) => {
  const validateValues = LoginSchema.safeParse(values);
  if (!validateValues.success) {
    return {
      error: "Please enter a valid email and password.",
    }
  }
  try {
    const result = await fetch(process.env.NEXT_API_URL + "/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validateValues.data),
    })
    const json = await result.json();
    if (json.code === 0 && result.status === 200) {
      cookies().set("token", JSON.stringify(json.data), { secure: true })
      return {
        data: null
      }
    } else {
      return {
        error: json.message
      }
    }
  } catch (error) {
    return {
      error: "Invalid username or password. Please try again.",
    }
  }
}  
