import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { UserIcon } from './compoents/UserIcon'
import { Search } from './compoents/Search'
import { Logo } from '@/components/Logo'
import { ToggleMode } from '@/components/ToggleMode'

export function Header() {
  return (
    <>
      <Navbar isBordered>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Search />
          </NavbarItem>
          <NavbarItem isActive>
            <UserIcon />
          </NavbarItem>
          <NavbarItem>
            <ToggleMode />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  )
}
