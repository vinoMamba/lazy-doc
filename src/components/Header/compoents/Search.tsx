import type { FC } from 'react'
import { Button } from 'antd'
import { SvgIcon } from '@/components/Icon'
import { Kbd } from '@/components/Kbd'

export const Search: FC = () => {
  return (
    <Button>
      <div className="flex items-center gap-1">
        <SvgIcon icon="iconamoon:search-thin" />
        <span className=" italic text-gray-500">快速查找...</span>
        <Kbd keys={['Command']}>K</Kbd>
      </div>
    </Button>
  )
}
