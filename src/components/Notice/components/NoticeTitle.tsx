import { MessageOutlined } from "@ant-design/icons"
import { FC } from "react"

type Props = {
  title: string
}

export const ModalTitle: FC<Props> = (props) => {
  const { title } = props
  return (
    <div className="flex items-center">
      <MessageOutlined className="mr-4" />
      <span className="font-400">{title}</span>
    </div>
  )
}
