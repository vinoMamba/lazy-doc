"use client"

import { logout } from "@/actions/logout"

export const LogoutButton = ({ children }: { children: React.ReactNode }) => {
  const onClick = () => {
    logout()
  }
  return (
    <span onClick={onClick}>{children}</span>
  )
}
