import { useState } from "react"
import { useProject } from "/@/hooks/useProject"
import { GetProjectParams } from "/@/types"
import { List, PaginationProps } from "antd"
import { ListItem } from "./components/ListItem"

export const Project = () => {
  const [params, setParams] = useState<GetProjectParams>({
    pageNum: 1,
    pageSize: 10
  })

  const { data, isLoading } = useProject(params)

  const onChange: PaginationProps['onChange'] = (page) => {
    setParams(p => ({
      ...p,
      pageNum: page
    }));
  };

  return (
    <>
      <List
        pagination={{
          position: "bottom",
          align: "end",
          total: data?.total,
          defaultCurrent: 1,
          onChange
        }}
        dataSource={data?.items}
        renderItem={(item) => (
          <ListItem project={item} loading={isLoading} />
        )}
      />
    </>
  )
}
