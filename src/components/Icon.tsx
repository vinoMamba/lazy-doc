import { Icon } from '@iconify-icon/react'
import type { FC, MouseEventHandler } from 'react'

interface Props {
  icon: string
  className?: string
  onClick?: MouseEventHandler
}
export const SvgIcon: FC<Props> = ({ icon, className, onClick }) => {
  return (
    <Icon icon={icon} className={`btn btn-square btn-sm text-lg ${className}`} onClick={onClick} />
  )
}
