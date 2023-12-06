import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import { useNotify } from '@/store/useNotifyContext'
import { router } from '@/router/router'
import { useHttp } from '@/shared/http'

export interface ModifyPasswordParams {
  oldPassword: string
  newPassword: string
}

export function useModifyPwd() {
  const { put } = useHttp()
  const { trigger, data, error } = useSWRMutation('/api/user/password', (url, { arg }: { arg: ModifyPasswordParams }) => put(url, arg))
  const { success, error: errMsg } = useNotify()

  useEffect(() => {
    if (error) {
      errMsg(error.response.data.message)
    }
  }, [error])

  useEffect(() => {
    if (data) {
      success('修改成功,请重新登录!')
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userInfo')
      router.navigate('/login')
    }
  }, [data])

  const handleModifyPwd = (params: ModifyPasswordParams) => {
    trigger(params)
  }

  return {
    handleModifyPwd,
    data,
  }
}
