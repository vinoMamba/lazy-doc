import type { FC } from 'react'
import { Divider } from '@nextui-org/react'
import { SvgIcon } from '@/components/Icon'

interface Props {
  title: string
}

export const DividerLine: FC<Props> = ({ title }) => {
  return (
    <div className=" flex items-center overflow-hidden">
      <div className="flex items-center mr-2">
        <SvgIcon icon="ic:twotone-tag" className=" text-lg" />
        <span className="italic font-bold text-lg">{title}</span>
      </div>
      <Divider className=" my-4" />
    </div>
  )
}
