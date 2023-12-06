import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { type FC, useState } from 'react'
import type { ModifyPasswordParams } from '@/api/useModifyPwd'
import { useModifyPwd } from '@/api/useModifyPwd'

export const ChangePwd: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { handleModifyPwd } = useModifyPwd()

  const [modifyPwdParams, setmodifyPwdParams] = useState<ModifyPasswordParams>({
    oldPassword: '',
    newPassword: '',
  })

  return (
    <>
      <Button onClick={onOpen} size="sm" variant="ghost">
        Modify Password
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" size="sm">
        <ModalContent>
          <ModalHeader>Modify Password</ModalHeader>
          <ModalBody>
            <Input
              isRequired
              type="password"
              placeholder="Enter your old password"
              size="sm"
              value={modifyPwdParams.oldPassword}
              onChange={(e) => {
                setmodifyPwdParams(prev => ({ ...prev, oldPassword: e.target.value }))
              }}
            />
            <Input
              isRequired
              type="password"
              placeholder="Enter your new password"
              size="sm"
              value={modifyPwdParams.newPassword}
              onChange={(e) => {
                setmodifyPwdParams(prev => ({ ...prev, newPassword: e.target.value }))
              }}
            />
          </ModalBody>
          <ModalFooter className=" flex-col justify-start">
            <Button variant="ghost" size="sm" onClick={() => handleModifyPwd(modifyPwdParams)}>ok</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
