import useSWRMutation from 'swr/mutation'
import { useEffect } from 'react'
import { useNotify } from '@/store/useNotifyContext'
import type { CreateProjectParams } from '@/api/project'
import { CreateProjectFetcher } from '@/api/project'

export function useCreateProject() {
  const { trigger, data, error } = useSWRMutation('/api/project', CreateProjectFetcher)
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
