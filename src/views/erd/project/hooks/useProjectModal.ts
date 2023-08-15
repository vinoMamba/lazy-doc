import { MutableRefObject, useRef } from "react"
import { ModalData, ProjectModalRef } from "../components/ProjectModal"


type Method = {
  openModal:(data?:ModalData) => void
}

type ReturnType = [
  MutableRefObject<ProjectModalRef | null>,
  Method
]

export const useProjectModal = () => {
  const modalRef = useRef<ProjectModalRef | null>(null)

  const getInstance = () => {
    return modalRef.current
  }

  const openModal = (initData?: ModalData) => {
    getInstance()?.openModal(initData)
  }


  return [modalRef, { openModal }] as ReturnType
}
