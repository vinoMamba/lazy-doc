"use server"

import { RegisterSchema } from "@/schema/auth";
import { cookies } from "next/headers";
import { z } from "zod";

export const registerAction: Action<z.infer<typeof RegisterSchema>> = async (values) => {
  const validateValues = RegisterSchema.safeParse(values);
  if (!validateValues.success) {
    return {
      error: "Please enter a valid data.",
    }
  }
  try {
    const result = await fetch(process.env.NEXT_API_URL + "/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validateValues.data),
    })

    const json = await result.json();
    if (json.code === 0 && result.status === 200) {
      cookies().set("token", JSON.stringify(json.data.accessToken), { secure: true })
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
      error: "Registration failed. Please try again.",
    }
  }
}  
