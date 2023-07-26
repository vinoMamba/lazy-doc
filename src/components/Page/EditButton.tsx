import { EditFilled } from "@ant-design/icons"
import { Icon } from "../Icon"
import { BasicModal, useModal } from "../Modal"
import { VEditor } from "../Editor"
import { useEditor } from "../Editor/useEditor"
import { usePage } from "/@/store/usePage"

export const EditButton = () => {
  const helpMsg = '编辑'
  const [setPageContent] = usePage(state => [state.setPageContent])
  const [editorRef, { getMdValue }] = useEditor()
  const [modalRef, { open }] = useModal({
    width: '60vw',
    title: helpMsg
  })

  const beforeOkFunc = () => {
    const value = getMdValue()
    console.log(value)
    setPageContent(value)
  }

  const handleClick = () => {
    open()
  }
  return (
    <>
      <Icon helpMsg={helpMsg} onClick={handleClick}><EditFilled /></Icon>
      <BasicModal ref={modalRef} beforeOkFunc={beforeOkFunc}>
        <VEditor value="fuck" ref={editorRef} />
      </BasicModal>
    </>
  )
}
