import { EditFilled } from "@ant-design/icons"
import { useModal } from "../Modal"
import { Icon } from "../Icon"
import { Modal } from "antd"
export const EditButton = () => {
  const [open, { openClick, closeClick }] = useModal()
  const handleClick = () => {
    openClick()
  }
  return (
    <>
      <Icon helpMsg="编辑" onClick={handleClick}><EditFilled /></Icon>
      <Modal open={open} onOk={closeClick}>111</Modal>
    </>
  )
}
