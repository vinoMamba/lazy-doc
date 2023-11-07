import type { FC } from 'react'
import { SvgIcon } from '../Icon'
import { ToggleMode } from '../ToggleMode'
import { Logo } from './Logo'
import { UserIcon } from './UserIcon'

export const Header: FC = () => {
  return (
    <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 [transform:translate3d(0,0,0)]">
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
