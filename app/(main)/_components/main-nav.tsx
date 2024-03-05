"use client"

import { LogoutButton } from "@/components/logout-button"
import { Button } from "@/components/ui/button"

export const MainNav = () => {
  return (
    <nav>
      <LogoutButton>
        <Button>Logout</Button>
      </LogoutButton>
    </nav>
  )
}
