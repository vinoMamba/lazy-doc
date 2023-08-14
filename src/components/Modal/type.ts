import { ModalProps as BasicProps } from "antd"
import { Dispatch, SetStateAction } from "react"

export type ModalRef = {
  openModal: () => void
  setProps: Dispatch<SetStateAction<ModalProps>>
}

export interface ModalProps extends BasicProps {
  beforeOkFunc?: () => void
}
