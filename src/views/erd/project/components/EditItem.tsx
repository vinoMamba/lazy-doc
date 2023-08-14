import { EditOutlined } from "@ant-design/icons"
import { BasicModal, useModal } from "/@/components/Modal"
import { FC } from "react"
import { ProjectItem } from "/@/types"
import { BasicForm, useForm } from "/@/components/Form"

export const EditItem: FC<{ item: ProjectItem }> = ({ item }) => {
  console.log(item)
  const Msg = "编辑"
  const [modalRef, { open }] = useModal({
    width: 400,
    title: Msg,
    footer: null
  })

  const [formRef] = useForm({
    schemas: [
      { field: 'projectName', label: '项目名称', component: "Input" }
    ]
  })

  return (
    <>
      <div
        onClick={() => open()}
        className="flex items-center">
        <EditOutlined />
        <span className="ml-8">{Msg}</span>
      </div>
      <BasicModal ref={modalRef}>
        <BasicForm ref={formRef} />
      </BasicModal>
    </>
  )
}
