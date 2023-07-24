import { EditFilled } from "@ant-design/icons"
import { Icon } from "../Icon"
import { BasicModal, useModal } from "../Modal"
import { PageForm } from "./PageForm"

export const EditButton = () => {
  const helpMsg = '编辑'

  const [modalRef, { open }] = useModal({
    title: helpMsg
  })

  return (
    <>
      <Icon helpMsg={helpMsg} onClick={() => open()}><EditFilled /></Icon>
      <BasicModal ref={modalRef}>
        <PageForm />
      </BasicModal>
    </>
  )
}
