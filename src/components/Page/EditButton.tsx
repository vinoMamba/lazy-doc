import { EditFilled } from "@ant-design/icons"
import { BasicModal } from "../Modal"
import { PageForm } from "./PageForm"
export const EditButton = () => {
  return (
    <>
      <BasicModal
        helpMsg="编辑"
        icon={<EditFilled />}
      >
        <PageForm />
      </BasicModal>

    </>
  )
}
