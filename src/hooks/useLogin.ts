import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import { useUser } from '@/store/useUser'
import type { LoginParams } from '@/api/user'
import { LoginFetcher } from '@/api/user'
import { router } from '@/router/router'
import { useNotify } from '@/store/useNotifyContext'
import { verifyEmail } from '@/shared'

export function useLogin() {
  const { trigger, data } = useSWRMutation('/api/user/login', LoginFetcher)
  const { success, error } = useNotify()
  const [setUserInfo] = useUser(s => [s.setUserInfo])

  useEffect(() => {
    if (data && data.code === 0) {
      success('登录成功')
      window.localStorage.setItem('token', data.data.token)
      setUserInfo(data.data)
      router.navigate('/project/list')
    }
    else if (data && data.code === 1) {
      error(data.message)
    }
  }, [data])

  const handleLogin = (loginParams: LoginParams) => {
    if (!verifyEmail(loginParams.username)) {
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
