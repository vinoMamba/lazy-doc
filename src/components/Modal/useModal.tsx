import { useRef } from "react"
import { ModalRef } from "./type"
import { MutableRefObject } from "react"

type Method = {
  open: () => void
}

type ReturnType = [
  MutableRefObject<ModalRef | null>,
  Method
]

export const useModal = () => {
  const modalRef = useRef<ModalRef | null>(null)

  const getInstance = () => {
    return modalRef.current
  }

  const open = () => {
    getInstance()?.openModal()
  }

  return [modalRef, { open }] as ReturnType
}
