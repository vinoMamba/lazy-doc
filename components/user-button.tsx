"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, User } from "lucide-react"
import { useCurrentUser } from "@/hooks/use-current-user"
import { LogoutButton } from "./logout-button"
import Image from "next/image"
import { buttonVariants } from "@/components/ui/button"
import { UserItem } from "./user-item"

export const UserButton = () => {
  const user = useCurrentUser()
  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <div className={
          buttonVariants({ variant: 'outline', size: 'icon' })
        }>
          {user?.image ?
            <Image src={user.image} alt="" /> :
            <User className="h-[1.2rem] w-[1.2rem]" />
          }
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuLabel>
          <UserItem user={user} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <LogoutButton>
            <DropdownMenuItem className="px-2 cursor-pointer">
              <LogOut className="w-4 h-4" />
              <span className="ml-1">Logout</span>
            </DropdownMenuItem>
          </LogoutButton>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
