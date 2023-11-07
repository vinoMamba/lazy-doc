import { Icon } from '@iconify-icon/react'
import type { FC } from 'react'

interface Props {
  icon: string
}
export const SvgIcon: FC<Props> = ({ icon }) => {
  return (
    <Icon icon={icon} />
  )
}
