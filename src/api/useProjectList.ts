import useSWR from 'swr'
import { useHttp } from '@/shared/http'

export interface ProjectItem {
  id: string
  projectName: string
  projectDesc: string
  isPublic: '0' | '1'
}

export function useProjectList() {
  const { get } = useHttp()
  const { data, error, isLoading } = useSWR('/api/project', url => get<Array<ProjectItem>>(url))

  return {
    list: data?.data ?? [],
    error,
    isLoading,
  }
}
