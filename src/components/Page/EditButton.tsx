import { EditFilled } from "@ant-design/icons"
import { Icon } from "../Icon"
import { BasicModal, useModal } from "../Modal"

export const EditButton = () => {
  const [modalRef, { open }] = useModal()

  return (
    <>
      <Icon helpMsg="编辑" onClick={() => open()}><EditFilled /></Icon>
      <BasicModal ref={modalRef} title={"title"} >
        111111
      </BasicModal>
    </>
  )
}
