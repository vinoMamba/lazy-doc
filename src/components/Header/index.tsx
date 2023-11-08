import type { FC } from 'react'
import { UserIcon } from './UserIcon'
import { Logo } from '@/components/Logo'
import { ToggleMode } from '@/components/ToggleMode'
import { SvgIcon } from '@/components/Icon'

export const Header: FC = () => {
  return (
    <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-80 backdrop-blur">
      <header className="navbar px-16">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex items-center gap-3">
          <SvgIcon icon="mdi:message-processing-outline" />
          <UserIcon />
          <ToggleMode />
        </div>
      </header>
    </div>
  )
}
