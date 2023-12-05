import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import { useUser } from '@/store/useUser'
import type { LoginParams } from '@/api/user'
import { LoginFetcher } from '@/api/user'
import { useNotify } from '@/store/useNotifyContext'
import { verifyEmail } from '@/shared'
import { router } from '@/router/router'

export function useLogin() {
  const { trigger, data, error } = useSWRMutation('/api/user/login', LoginFetcher)
  const { success, error: errMsg } = useNotify()
  const [setUserInfo] = useUser(s => [s.setUserInfo])

  useEffect(() => {
    if (error) {
      errMsg(error.response.data.message)
    }
  }, [error])

  useEffect(() => {
    if (data) {
      success('登录成功')
      setUserInfo(data)
      router.navigate('/project')
    }
  }, [data])

  const handleLogin = (loginParams: LoginParams) => {
    if (!verifyEmail(loginParams.email)) {
      error('邮箱格式不正确')
      return
    }
    trigger(loginParams)
  }

  return {
    handleLogin,
    data,
  }
}
