import { useHttp } from '@/shared/http'

const { post } = useHttp()

export interface CreateProjectParams {
  projectName: string
  projectDesc: string
  isPublic: '0' | '1'
}

export async function CreateProjectFetcher(url: string, { arg }: { arg: CreateProjectParams }) {
  const res = await post(url, arg)
  return res.data
}
