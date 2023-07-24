import { ModalProps } from "antd"
import { Dispatch, SetStateAction } from "react"

export type ModalRef = {
  openModal: () => void
  setProps: Dispatch<SetStateAction<ModalProps>>
}
