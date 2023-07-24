import { EditFilled } from "@ant-design/icons"
import { Icon } from "../Icon"
import { BasicModal, useModal } from "../Modal"
import { BasicForm, useForm } from "../Form"
import { formSchemas } from "./form.data"
import { useState } from "react"

export const EditButton = () => {
  const [showForm, setShowForm] = useState(false)
  const helpMsg = '编辑'

  const [modalRef, { open }] = useModal({
    width: '80vw',
    title: helpMsg
  })

  const [formRef] = useForm({
    labelWidth: 140,
    schemas: formSchemas
  })

  const handleClick = () => {
    open()
    setShowForm(true)
  }

  return (
    <>
      <Icon helpMsg={helpMsg} onClick={handleClick}><EditFilled /></Icon>
      <BasicModal ref={modalRef}>
        {showForm && <BasicForm ref={formRef} />}
      </BasicModal>
    </>
  )
}
