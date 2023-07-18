import { Tooltip } from "antd"
import { FC, ReactNode } from "react"

type Props = {
  children: ReactNode
  helpMsg: string
  onClick?: () => void
}

export const Icon: FC<Props> = (props) => {
  const { children, helpMsg, onClick } = props
  return (
    <Tooltip title={helpMsg} placement="bottom">
      <div
        className="w-40 h-40 rounded-8 bg-white shadow flex justify-center items-center"
        onClick={onClick}
      >
        {children}
      </div>
    </Tooltip >
  )
}
