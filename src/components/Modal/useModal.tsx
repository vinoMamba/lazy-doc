import { useRef } from "react"
import { ModalRef } from "./type"
import { MutableRefObject } from "react"
import { ModalProps } from "antd"

type Method = {
  open: () => void
}

type ReturnType = [
  MutableRefObject<ModalRef | null>,
  Method
]

export const useModal = (initProps: ModalProps) => {
  const modalRef = useRef<ModalRef | null>(null)

  const getInstance = () => {
    return modalRef.current
  }

  const setInitProps = () => {
    getInstance()?.setProps((props: ModalProps) => ({
      ...props,
      ...initProps
    }) as ModalProps)
  }

  const open = () => {
    setInitProps()
    getInstance()?.openModal()
  }


  return [modalRef, { open }] as ReturnType
}
