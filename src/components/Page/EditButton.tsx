import { EditFilled } from "@ant-design/icons"
import { Icon } from "../Icon"
import { BasicModal, useModal } from "../Modal"

export const EditButton = () => {
  const helpMsg = '编辑'

  const [modalRef, { open }] = useModal({
    title: helpMsg
  })

  return (
    <>
      <Icon helpMsg={helpMsg} onClick={() => open()}><EditFilled /></Icon>
      <BasicModal ref={modalRef}>
        111111
      </BasicModal>
    </>
  )
}
