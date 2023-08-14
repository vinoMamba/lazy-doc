import useSWR from "swr"
import { useHttp } from "../shared/http"
import { PageResult, ProjectItem, GetProjectParams } from "../types"

export const useProject = (params: GetProjectParams) => {
  const { get } = useHttp()
  const fetcher = async (url: string, params: GetProjectParams) => {
    const { data } = await get<PageResult<ProjectItem>>(url, { params })
    return data.data
  }

  const { data, isLoading } = useSWR(["/api/project/page_list", params], ([url, params]) => fetcher(url, params))

  return {
    data,
    isLoading
  }
}

