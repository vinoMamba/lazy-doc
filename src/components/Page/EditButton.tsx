import { EditFilled } from "@ant-design/icons"
import { Icon } from "../Icon"
import { BasicModal, useModal } from "../Modal"
import { VEditor } from "../Editor"

export const EditButton = () => {
  const helpMsg = '编辑'

  const [modalRef, { open }] = useModal({
    width: '60vw',
    title: helpMsg
  })

  const handleClick = () => {
    open()
  }

  return (
    <>
      <Icon helpMsg={helpMsg} onClick={handleClick}><EditFilled /></Icon>
      <BasicModal ref={modalRef}>
        <VEditor value="fuck" />
      </BasicModal>
    </>
  )
}
