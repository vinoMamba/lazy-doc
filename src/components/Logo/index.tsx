import type { FC, MouseEventHandler } from 'react'
import { SvgIcon } from '@/components/Icon'

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement>
  large?: boolean
}

export const Logo: FC<Props> = ({ large, ...rest }) => {
  return (
    <div className=" flex items-center cursor-pointer" {...rest}>
      <SvgIcon icon="openmoji:pen" className={large ? 'text-[72px]' : 'text-[48px]'} />
      <div className=" flex flex-col items-start ">
        <h1 className={` ${large ? 'text-3xl' : 'text-lg'} tracking-tight inline font-bold from-[#11181c] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b`}>Lazy Doc</h1>
        <span className={`${large ? 'text-xl' : 'text-sm'} italic`}>Enjoy Writing</span>
      </div>
    </div>
  )
}
