import { EditFilled } from "@ant-design/icons"
import { BasicModal } from "../Modal"
export const EditButton = () => {
  return (
    <>
      <BasicModal
        helpMsg="编辑"
        icon={<EditFilled />}
        footer={null}
      >
        111
      </BasicModal>

    </>
  )
}
