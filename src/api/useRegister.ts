import useSWRMutation from 'swr/mutation'
import { useContext, useEffect } from 'react'
import { useNotify } from '@/store/useNotifyContext'
import { verifyEmail } from '@/shared'
import { LoginContext } from '@/store/useLoginContext'
import { useHttp } from '@/shared/http'

export interface RegisterParams {
  email: string
  password: string
  confirmPassword: string
}

export function useRegister() {
  const { post } = useHttp()
  const { setCurrentTab, setEmail } = useContext(LoginContext)!
  const { trigger, data, error } = useSWRMutation('/api/user/register', (url, { arg }: { arg: RegisterParams }) => post<{ email: string }>(url, arg))
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
      setEmail(data.data.email || '')
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
