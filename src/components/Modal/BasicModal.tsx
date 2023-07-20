import { Modal } from "antd"
import { FC, ReactNode, useState } from "react"
import { Icon } from "../Icon"
import { ModalTitle } from "./components/ModalTitle"

type Props = {
  helpMsg: string,
  icon: ReactNode,
  children: ReactNode
  footer?: ReactNode
}

export const BasicModal: FC<Props> = ({ helpMsg, icon, children, footer }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Icon helpMsg={helpMsg} onClick={() => setOpen(true)}>
        {icon}
      </Icon>
      <Modal
        width={900}
        title={<ModalTitle title={helpMsg} icon={icon} />}
        open={open} footer={footer}
        onCancel={() => setOpen(false)}>
        {children}
      </Modal>
    </>
  )
}
