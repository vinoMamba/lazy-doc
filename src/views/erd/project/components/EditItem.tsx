import { EditOutlined } from "@ant-design/icons"
import { BasicModal, useModal } from "/@/components/Modal"
import { FC } from "react"
import { ProjectItem } from "/@/types"
import { ProjectForm } from "./ProjectForm"

export const EditItem: FC<{ item: ProjectItem }> = ({ item }) => {
  const Msg = "编辑"
  const [modalRef, { open }] = useModal({
    width: 500,
    title: Msg,
    footer: null,
    destroyOnClose: true
  })
  return (
    <>
      <EditOutlined onClick={() => open()} />
      <BasicModal ref={modalRef}>
        <ProjectForm item={item}/>
      </BasicModal>
    </>
  )
}
