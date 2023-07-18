//TODO: 消息通知
export type NoticeItem = {
  id: string
  type: 'update' | 'create' | 'delete'
  createTime: string
  createdBy: {
    username: string
    userId: string
  }
  pageInfo: {
    pageId: string
    pageTitle: string
  }
  remark: string
}
