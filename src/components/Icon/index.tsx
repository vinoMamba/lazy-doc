import { Icon } from '@iconify-icon/react'
import type { FC, MouseEventHandler } from 'react'

interface Props {
  icon: string
  className?: string
  onClick?: MouseEventHandler
}
export const SvgIcon: FC<Props> = ({ icon, className, onClick }) => {
  const classes = className || 'btn btn-square btn-sm text-lg'
  return (
    <Icon icon={icon} className={classes} onClick={onClick} />
  )
}
