import type { FC } from 'react'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { SvgIcon } from '../Icon'

export const UserIcon: FC = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <SvgIcon icon="mdi:account-circle" onClick={() => setIsOpen(true)} />
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className=" w-screen h-screen fixed flex items-center justify-center inset-0 bg-black/50 z-50">
          <Dialog.Panel className="w-1/4 bg-base-200 rounded-lg p-4">
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>
              This will permanently deactivate your account
            </Dialog.Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
            <button className=" btn" onClick={() => setIsOpen(false)}>Close</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
