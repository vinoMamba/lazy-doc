import { Modal } from "antd"
import { FC, ReactNode, useState } from "react"
import { Icon } from "../Icon"
import { ModalTitle } from "./components/ModalTitle"

type Props = {
  helpMsg: string,
  beforeOkFunc?: () => void
  icon: ReactNode,
  children: ReactNode
  footer?: ReactNode | null
}

export const BasicModal: FC<Props> = ({ helpMsg, icon, children, footer, beforeOkFunc }) => {
  const [open, setOpen] = useState(false)

  const handleOk = () => {
    if (beforeOkFunc instanceof Function) {
      beforeOkFunc()
    } else {
      setOpen(false)
    }
  }

  return (
    <>
      <Icon helpMsg={helpMsg} onClick={() => setOpen(true)}>
        {icon}
      </Icon>
      <Modal
        width={900}
        title={<ModalTitle title={helpMsg} icon={icon} />}
        open={open}
        footer={footer}
        onOk={handleOk}
        onCancel={() => setOpen(false)}>
        {children}
      </Modal>
    </>
  )
}
