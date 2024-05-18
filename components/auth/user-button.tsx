"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, Settings2, User } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import useSWR from "swr"
import Image from "next/image"
import { UserItem } from "./user-item"
import { logout } from "@/action/logout"

export const UserButton = () => {
  const { data } = useSWR('/api/user/info', (url) => fetch(url).then(res => res.json()))

  const handleLogout = () => {
    logout()
  }

  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <div className={
          buttonVariants({ variant: 'outline', size: 'icon' })
        }>
          {data?.avatar ?
            <Image src={data.avatar} alt="" /> :
            <User className="h-[1.2rem] w-[1.2rem]" />
          }
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" forceMount>
        <DropdownMenuLabel>
          <UserItem user={data} />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/settings">
            <DropdownMenuItem className="px-2 cursor-pointer">
              <Settings2 className="w-4 h-4" />
              <span className="ml-1">Settings</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="px-2 cursor-pointer">
            <LogOut className="w-4 h-4" />
            <span className="ml-1" onClick={handleLogout}>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
