import { useRef } from "react"
import { ModalRef } from "./type"
import { MutableRefObject } from "react"
import { ModalProps } from "antd"

type Method = {
  open: <T = Recordable>(data?: T) => void
}

type ReturnType = [
  MutableRefObject<ModalRef | null>,
  Method
]

const transformDataMap = new Map<typeof Symbol, Recordable>()

export const useModal = (initProps?: ModalProps) => {
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

  const open = <T = Recordable>(data?: T) => {
    console.log(data)
    setInitProps()
    getInstance()?.openModal()
  }


  return [modalRef, { open }] as ReturnType
}

export const useModalInner = () => {
  const modalRef = useRef<ModalRef | null>(null)
  return [modalRef]
}

