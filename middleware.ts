import authConfig from "@/lib/auth.config"
import NextAuth from "next-auth"
import { DEFAULT_REDIRECT, apiAuthPrefix, authRoutes, publicRoutes } from "./config/routes"

const { auth } = NextAuth({ ...authConfig })


export default auth((req) => {
  const { nextUrl, auth } = req
  const isLoggedIn = !!auth

  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname)
  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix)

  if (isApiAuthRoutes) {
    return
  }

  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
    }
    return
  }
  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/login", nextUrl))
  }
  return
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
