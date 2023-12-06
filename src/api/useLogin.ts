import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import type { UserInfo } from '@/store/useUser'
import { useUser } from '@/store/useUser'
import { useNotify } from '@/store/useNotifyContext'
import { verifyEmail } from '@/shared'
import { router } from '@/router/router'
import { useHttp } from '@/shared/http'

export interface LoginParams {
  email: string
  password: string
}

export function useLogin() {
  const { post } = useHttp()
  const { trigger, data, error } = useSWRMutation('/api/user/login', (url, { arg }: { arg: LoginParams }) => post<UserInfo>(url, arg))
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
      setUserInfo(data.data)
      router.navigate('/project/list')
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
  }
}
