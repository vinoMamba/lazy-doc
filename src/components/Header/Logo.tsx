import type { FC } from 'react'
import { SvgIcon } from '../Icon'
import { router } from '@/router/router'

export const Logo: FC = () => {
  const goHome = () => {
    router.navigate('/home')
  }
  return (
    <div className=" flex items-center cursor-pointer" onClick={goHome}>
      <SvgIcon icon="openmoji:pen" className="text-[48px]" />
      <div className=" flex flex-col items-start">
        <span className=" text-lg font-bold">Lazy Doc</span>
        <span className=" text-sm text-[#999] italic">Enjoy Writing</span>
      </div>
    </div>
  )
}
