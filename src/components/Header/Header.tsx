import type { FC } from 'react'
import { Logo } from './Logo'
import { SvgIcon } from '@/components/Icon'

export const Header: FC = () => {
  return (
    <header className="h-[64px] flex items-center justify-between px-[64px] border-b border-[#dadada]">
      <Logo />
      <div>
        <SvgIcon icon="mdi:account" className=" p-2 rounded-md text-lg border cursor-pointer hover:shadow-md" />
      </div>
    </header>
  )
}
