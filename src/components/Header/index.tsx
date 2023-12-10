import { UserIcon } from './compoents/UserIcon'
import { Search } from './compoents/Search'
import { Logo } from '@/components/Logo'
import { ToggleMode } from '@/components/ToggleMode'

export function Header() {
  return (
    <nav className="flex z-40 w-full h-16 items-center justify-center sticky top-0 inset-x-0 backdrop-blur-lg border-b">
      <header className=" flex items-center justify-between h-full w-full max-w-[1280px] ">
        <Logo />
        <div className=" flex items-center gap-2">
          <Search />
          <UserIcon />
          <ToggleMode />
        </div>
      </header>
    </nav>
  )
}
