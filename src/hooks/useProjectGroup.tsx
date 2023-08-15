import useSWR from "swr"
import { useHttp } from "../shared/http"
import { PageResult, GetProjectGroupParams, ProjectGroupItem } from "../types"

// the select options
export const useProjectGroupOptions = (params: GetProjectGroupParams) => {
  const { get } = useHttp()
  const fetcher = async (url: string, params: GetProjectGroupParams) => {
    const { data } = await get<PageResult<ProjectGroupItem>>(url, { params })
    return data.data
  }

  const { data, isLoading } = useSWR(["/api/project_group/page_list", params], ([url, params]) => fetcher(url, params))
  if (data) {
    const { items = [] } = data
    return {
      options: items.map(item => ({ label: item.groupName, value: item.projectGroupId })),
      isLoading
    }
  } else {
    return {
      options: [],
      isLoading
    }
  }
}

