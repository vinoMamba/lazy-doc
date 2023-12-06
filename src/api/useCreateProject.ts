import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import { useNotify } from '@/store/useNotifyContext'
import { useHttp } from '@/shared/http'

export interface CreateProjectParams {
  projectName: string
  projectDesc: string
  isPublic: '0' | '1'
}

export function useCreateProject() {
  const { post } = useHttp()
  const { trigger, data, error } = useSWRMutation('/api/project', (url, { arg }: { arg: CreateProjectParams }) => post(url, arg))
  const { success, error: errMsg } = useNotify()

  useEffect(() => {
    if (error) {
      errMsg(error.response.data.message)
    }
  }, [error])

  useEffect(() => {
    if (data) {
      success('创建成功')
    }
  }, [data])

  const handleCreateProject = (params: CreateProjectParams) => {
    trigger(params)
  }

  return {
    handleCreateProject,
    data,
  }
}
