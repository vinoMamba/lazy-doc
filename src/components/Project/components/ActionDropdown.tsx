import { EllipsisOutlined, FolderOpenFilled, StarFilled, ToTopOutlined } from "@ant-design/icons"
import { Dropdown, MenuProps } from "antd"
import { FC, ReactNode } from "react"

type ItemProps = {
  icon: ReactNode
  labelName: string
}
const Item: FC<ItemProps> = ({ icon, labelName }) => {
  return (
    <div className="flex items-center">
      {icon}
      <span className="ml-8">{labelName}</span>
    </div>
  )
}


export const ActionDropdown = () => {
  const items: MenuProps['items'] = [
    { key: '1', label: <Item icon={<FolderOpenFilled />} labelName="打开项目" /> },
    { key: '2', label: <Item icon={<StarFilled color="#ffc107" />} labelName="星标项目" /> },
    { key: '3', label: <Item icon={<ToTopOutlined />} labelName="置顶" /> },
  ]
  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <EllipsisOutlined className="text-18 mr-16" />
    </Dropdown>
  )
}
