import type { FC } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, User, useDisclosure } from '@nextui-org/react'
import { SvgIcon } from '@/components/Icon'

export const UserIcon: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  return (
    <>
      <Button isIconOnly onClick={onOpen} size="sm" variant="flat">
        <SvgIcon icon="mdi:account-circle" className="text-xl" />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" size="sm">
        <ModalContent>
          <ModalHeader>User Info</ModalHeader>
          <ModalBody>
            <div>
              <User
                name="Vino Wang"
                description="vino0908@outlook.com"
                avatarProps={{
                  src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                }}
              />
            </div>
          </ModalBody>
          <ModalFooter className=" flex-col justify-start">
            <Button variant="ghost" size="sm"> Change Password</Button>
            <Button variant="ghost" size="sm">Logout</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
