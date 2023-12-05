import type { FC } from 'react'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, User, useDisclosure } from '@nextui-org/react'
import { ChangePwd } from './ChangePassword'
import { SvgIcon } from '@/components/Icon'
import { useUser } from '@/store/useUser'
import { router } from '@/router/router'

export const UserIcon: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [u] = useUser(s => [s.userInfo])
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('userInfo')
    router.navigate('/login')
  }
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
                name={u?.username}
                description={u?.email}
                avatarProps={{
                  src: u?.avatar,
                }}
              />
            </div>
          </ModalBody>
          <ModalFooter className=" flex-col justify-start">
            <ChangePwd />
            <Button variant="ghost" size="sm" onClick={handleLogout}>Logout</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
