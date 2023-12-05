import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import { updatePwdFetcher } from '@/api/user'
import type { ModifyPasswordParams } from '@/api/user'
import { useNotify } from '@/store/useNotifyContext'
import { router } from '@/router/router'

export function useModifyPwd() {
  const { trigger, data, error } = useSWRMutation('/api/user/password', updatePwdFetcher)
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
