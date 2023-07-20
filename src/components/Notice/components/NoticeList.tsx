import { List } from "antd"
import { NoticeItem } from "/@/types"

export const NoticeList = () => {
  const listSource: Array<NoticeItem> = [
    {
      id: '0',
      type: 'update',
      createTime: '2022-12-20 15:26:28',
      createdBy: { userId: '1', username: 'vino' },
      pageInfo: { pageId: '1', pageTitle: '统计报表' },
      remark: '修改xx字段'
    },
    {
      id: '1',
      type: 'update',
      createTime: '2022-12-20 15:26:28',
      createdBy: { userId: '1', username: 'vino' },
      pageInfo: { pageId: '1', pageTitle: '统计报表' },
      remark: '修改xx字l段段段段段段段段段段段段段段'
    }
  ]

  return (
    <List
      pagination={{ position: 'bottom', align: 'end' }}
      header={null}
      dataSource={listSource}
      renderItem={(item) => (
        <List.Item>
          <span className="mr-100">{item.createTime}</span>
          <div className="flex flex-col items-center justify-center items-baseline flex-grow">
            <span>{item.createdBy.username} {item.type} 页面 {item.pageInfo.pageTitle}</span>
            <span>修改备注：{item.remark}</span>
          </div>
        </List.Item>
      )}
    />
  )
}
