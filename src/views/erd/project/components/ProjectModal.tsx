import { Modal } from "antd"
import { forwardRef, useImperativeHandle, useState } from "react"
import { BasicForm, useForm } from "/@/components/Form"
import { ProjectItem } from "/@/types"
import { useProjectGroupOptions } from "/@/hooks/useProjectGroup"
import { useHttp } from "/@/shared/http"

export interface ModalData {
  isEdit: boolean,
  project: ProjectItem
}

export interface ProjectModalRef {
  openModal: (data?: ModalData) => void
}

export const ProjectModal = forwardRef<ProjectModalRef>((_props, ref) => {
  const { post, put } = useHttp()
  const { options } = useProjectGroupOptions({ pageSize: 999, pageNum: 1 })
  const [title, setTitle] = useState("新增")
  const [isOpen, setIsOpen] = useState(false)
  const [formRef, { setFieldsValue, getFieldsValue }] = useForm({
    labelWidth: 75,
    schemas: [
      {
        field: 'projectName',
        label: '项目名称',
        component: "Input",
        required: true
      },
      {
        field: 'projectGroupId',
        label: '项目组',
        component: "Select",
        componentProps: { options }
      },
      {
        field: 'description',
        label: '项目描述',
        component: "TextArea",
        required: true
      },
    ]
  })

  const openModal = (initData?: ModalData) => {
    if (initData) {
      const { isEdit, project } = initData
      setTitle(() => isEdit ? "编辑" : "新增")
      setFieldsValue(project)
    }
    setIsOpen(true)
  }

  const handleOk = () => {
    const value = getFieldsValue()
    console.log(value)
  }

  useImperativeHandle(ref, () => ({
    openModal
  }))

  return (
    <>
      <Modal
        title={title}
        closable={false}
        open={isOpen}
        okText="保存"
        cancelText="取消"
        onCancel={() => setIsOpen(false)}
        onOk={handleOk}
      >
        <BasicForm ref={formRef} />
      </Modal>
    </>
  )
})
