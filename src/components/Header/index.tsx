import type { FC } from 'react'
import { Divider } from '@nextui-org/react'
import { UserIcon } from './compoents/UserIcon'
import { Search } from './compoents/Search'
import { Logo } from '@/components/Logo'
import { ToggleMode } from '@/components/ToggleMode'

export const Header: FC = () => {
  return (
    <>
      <nav className=" z-50 flex flex-col items-center justify-center sticky top-0 inset-x-0 backdrop-blur-lg bg-background/50 backdrop-saturate-50">
        <header className=" max-w-[1280px] h-16 flex items-center justify-between w-full">
          <Logo />
          <div className=" flex items-center gap-2">
            <Search />
            <UserIcon />
            <ToggleMode />
          </div>
        </header>
        <Divider />
      </nav>
    </>
  )
}
