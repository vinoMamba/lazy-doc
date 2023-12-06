import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { type FC, useState } from 'react'
import type { ModifyPasswordParams } from '@/api/useModifyPwd'
import { useModifyPwd } from '@/api/useModifyPwd'

const MODIFY_PWD = '修改密码'

export const ChangePwd: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const { handleModifyPwd } = useModifyPwd()

  const [modifyPwdParams, setmodifyPwdParams] = useState<ModifyPasswordParams>({
    oldPassword: '',
    newPassword: '',
  })

  return (
    <>
      <Button onClick={onOpen} variant="ghost">
        {MODIFY_PWD}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top">
        <ModalContent>
          <ModalHeader>{MODIFY_PWD}</ModalHeader>
          <ModalBody>
            <Input
              isRequired
              type="password"
              placeholder="原密码"
              value={modifyPwdParams.oldPassword}
              onChange={e => setmodifyPwdParams(prev => ({ ...prev, oldPassword: e.target.value }))}
            />
            <Input
              isRequired
              type="password"
              placeholder="新密码"
              value={modifyPwdParams.newPassword}
              onChange={e => setmodifyPwdParams(prev => ({ ...prev, newPassword: e.target.value }))}
            />
          </ModalBody>
          <ModalFooter className=" flex-col justify-start">
            <Button variant="ghost" onClick={() => handleModifyPwd(modifyPwdParams)}>确定</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
