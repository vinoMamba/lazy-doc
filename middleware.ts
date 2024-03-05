import authConfig from "@/lib/auth.config"
import NextAuth from "next-auth"

const { auth } = NextAuth({ ...authConfig })

const publicRoutes = [
  "/"
]
const authRoutes = [
  "/login",
  "/register"
]

const apiAuthPrefix = "/api/auth"

export default auth((req) => {
  const { nextUrl, auth } = req
  const isLoggedIn = !!auth

  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname)
  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix)

  if (isApiAuthRoutes) {
    return
  }
  console.log("isLoggedIn", isLoggedIn)
  console.log("isAuthRoutes", isAuthRoutes)
  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/workbench", nextUrl))
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
