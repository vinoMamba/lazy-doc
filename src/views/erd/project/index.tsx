import { useState } from "react"
import { useProject } from "/@/hooks/useProject"
import { GetProjectParams } from "/@/types"
import { List, PaginationProps } from "antd"
import { ListItem } from "./components/ListItem"

export const Project = () => {
  const [params, setParams] = useState<GetProjectParams>({
    pageNum: 1,
    pageSize: 9
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
          showTotal: (total) => <span>共 {total} 条数据</span>,
          defaultCurrent: 1,
          onChange
        }}
        grid={{ gutter: 16, column: 3 }}
        dataSource={data?.items}
        renderItem={(item) => (
          <ListItem key={item.projectId} project={item} loading={isLoading} />
        )}
      />
    </>
  )
}
