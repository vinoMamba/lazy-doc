import { DeleteOutlined, EllipsisOutlined, FolderOpenFilled } from "@ant-design/icons"
import { Dropdown, MenuProps } from "antd"
import { FC, ReactNode } from "react"
import { EditItem } from "./EditItem"
import { ProjectItem } from "/@/types"

type ItemProps = {
  icon: ReactNode
  labelName: string
  onClick?: () => void
}
export const Item: FC<ItemProps> = ({ icon, labelName, onClick }) => {
  return (
    <div className="flex items-center" onClick={onClick}>
      {icon}
      <span className="ml-8">{labelName}</span>
    </div>
  )
}

export const ActionDropdown:FC<{item:ProjectItem}> = ({item}) => {
  const items: MenuProps['items'] = [
    { key: '1', label: <Item icon={<FolderOpenFilled />} labelName="打开项目" /> },
    { key: '2', label: <EditItem item={item} /> },
    { key: '3', label: <Item icon={<DeleteOutlined />} labelName="删除" /> },
  ]
  return (
    <Dropdown destroyPopupOnHide menu={{ items }} placement="bottomRight">
      <EllipsisOutlined className="text-18 mr-16" />
    </Dropdown>
  )
}
