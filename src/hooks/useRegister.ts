import useSWRMutation from 'swr/mutation'
import { useContext, useEffect } from 'react'
import type { RegisterParams } from '@/api/user'
import { registerFetcher } from '@/api/user'
import { useNotify } from '@/store/useNotifyContext'
import { verifyEmail } from '@/shared'
import { LoginContext } from '@/store/useLoginContext'

export function useRegister() {
  const { setCurrentTab, setEmail } = useContext(LoginContext)!
  const { trigger, data, error } = useSWRMutation('/api/user/register', registerFetcher)
  const { success, error: errMsg } = useNotify()

  useEffect(() => {
    if (error) {
      errMsg(error.response.data.message)
    }
  }, [error])

  useEffect(() => {
    if (data) {
      success('注册成功')
      setCurrentTab('login')
      setEmail(data.email || '')
    }
  }, [data])

  const handleRegister = (registerParams: RegisterParams) => {
    if (!verifyEmail(registerParams.email)) {
      error('邮箱格式不正确')
      return
    }
    trigger(registerParams)
  }

  return {
    handleRegister,
  }
}
