import { EditFilled } from "@ant-design/icons"
import { Icon } from "../Icon"
import { BasicModal, useModal } from "../Modal"
import { VEditor } from "../Editor"
import { Button } from "antd"
import { useEditor } from "../Editor/useEditor"

export const EditButton = () => {
  const helpMsg = '编辑'

  const [editorRef, { getMdValue }] = useEditor()

  const [modalRef, { open }] = useModal({
    width: '60vw',
    title: helpMsg
  })


  const handleClick = () => {
    open()
  }

  const btnClick = () => {
    const value = getMdValue()
    console.log(value)
  }

  return (
    <>
      <Icon helpMsg={helpMsg} onClick={handleClick}><EditFilled /></Icon>
      <BasicModal ref={modalRef}>
        <Button onClick={btnClick}>getValue</Button>
        <VEditor value="fuck" ref={editorRef} />
      </BasicModal>
    </>
  )
}
