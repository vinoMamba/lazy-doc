import type { FC } from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Avatar } from '@/components/Avatar'
import { SvgIcon } from '@/components/Icon'

export const UserIcon: FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <SvgIcon icon="mdi:account-circle" onClick={() => setIsOpen(true)} />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className=" w-screen h-screen fixed inset-0 bg-black/50 z-50 flex items-start justify-center">
          <Dialog.Panel className="w-1/4 bg-base-100 rounded-lg p-4 mt-[100px]">
            <Dialog.Title className=" flex items-center cursor-default">
              <SvgIcon icon="mdi:account-circle" />
              用户信息
            </Dialog.Title>
            <Dialog.Description>
              <Avatar />
            </Dialog.Description>
            <button className=" btn" onClick={() => setIsOpen(false)}>Close</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
