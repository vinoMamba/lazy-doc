import {Icon} from '@iconify-icon/react'
import { FC } from 'react'

type Props ={
  icon: string
}
export const  SvgIcon:FC<Props> = ({icon}) => {
  return (
    <Icon icon={icon} />
  )
}
