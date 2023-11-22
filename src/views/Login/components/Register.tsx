import { Button, Input, Link, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react'
import { useContext, useEffect, useState } from 'react'
import type { FC } from 'react'
import useSWRMutation from 'swr/mutation'
import { type RegisterParams, registerFetcher } from '@/api/user'
import { LoginContext } from '@/store/useLoginContext'

export const Register: FC = () => {
  const [disabled, setDisabled] = useState(true)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { setCurrentTab, setUsername } = useContext(LoginContext)!
  const [registerParams, setRegisterParams] = useState<RegisterParams>({
    username: '',
    password: '',
    confirmPassword: '',
  })

  const { trigger, data } = useSWRMutation('/api/user/register', registerFetcher)

  useEffect(() => {
    if (data && data.code === 0) {
      onOpen()
    }
  }, [data])

  useEffect(() => {
    setDisabled(
      registerParams.username === ''
      || registerParams.password === ''
      || registerParams.confirmPassword === '',
    )
  }, [registerParams])

  const handleClick = (onClose: () => void) => {
    setCurrentTab('login')
    setUsername(data?.data.username || '')
    onClose()
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Email"
        isRequired
        type="text"
        placeholder="Enter your Email"
        size="sm"
        value={registerParams.username}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, username: e.target.value }))
        }}
      />
      <Input
        isRequired
        label="Password"
        type="password"
        placeholder="Enter your password"
        size="sm"
        value={registerParams.password}
        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, password: e.target.value }))
        }}
      />
      <Input
        isRequired
        label="ConfirmPassword"
        type="password"
        placeholder="Enter your password again"
        size="sm"
        value={registerParams.confirmPassword}

        onChange={(e) => {
          setRegisterParams(prev => ({ ...prev, confirmPassword: e.target.value }))
        }}
      />

      <p className="text-center text-small">
        Already have an account?
        {' '}
        <Link size="sm" onPress={() => setCurrentTab('login')}>
          Login
        </Link>
      </p>
      <Button
        color="secondary"
        isDisabled={disabled}
        onClick={() => trigger(registerParams)}
      >
        Register
      </Button>
      <Modal
        backdrop="blur"
        hideCloseButton
        size="xs"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top"
      >
        <ModalContent>
          {
            onClose => (
              <ModalBody>
                <p className="text-center text-success text-lg font-bold">Register Success!</p>
                <Button variant="light" onClick={() => handleClick(onClose)}>Goto Login</Button>
              </ModalBody>
            )
          }
        </ModalContent>
      </Modal>
    </div>
  )
}
