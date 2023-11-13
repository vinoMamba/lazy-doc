import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react'
import type { FC } from 'react'

export const RequestInput: FC = () => {
  return (
    <div className=" flex items-center bg-default-100 p-2 shadow-sm rounded-lg">
      <Dropdown>
        <DropdownTrigger>
          GET
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>GET</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <input className=" outline-none bg-default-100 " />
      <div>COPY</div>
    </div>
  )
}
