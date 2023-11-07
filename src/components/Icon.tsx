import { Icon } from '@iconify-icon/react'
import type { FC } from 'react'

interface Props {
  icon: string
  className?: string
}
export const SvgIcon: FC<Props> = ({ icon, className }) => {
  return (
    <Icon icon={icon} className={className} />
  )
}
