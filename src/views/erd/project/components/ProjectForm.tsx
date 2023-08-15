import { FC, useEffect } from "react"
import { BasicForm, useForm } from "/@/components/Form"
import { ProjectItem } from "/@/types"

type Props = {
  item: ProjectItem | null
}

export const ProjectForm: FC<Props> = ({ item }) => {
  const [formRef, { setFieldsValue }] = useForm({
    labelWidth: 75,
    schemas: [
      {
        field: 'projectName',
        label: '项目名称',
        component: "Input",
        required: true
      },
      {
        field: 'projectGroup',
        label: '项目组',
        component: "Select",
      },
      {
        field: 'description',
        label: '描述',
        component: "TextArea",
        required: true
      },
      {
        field: 'logo',
        label: 'logo',
        component: "Upload",
      }
    ]
  })

  useEffect(() => {
    setFieldsValue(item as Recordable)
  }, [item, setFieldsValue])

  return (
    <BasicForm ref={formRef} />
  )
}
