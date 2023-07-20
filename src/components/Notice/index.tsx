import { MessageOutlined } from "@ant-design/icons"
import { NoticeList } from "./components/NoticeList"
import { BasicModal } from "../Modal"

export const Notice = () => {
  return (
    <>
      <BasicModal helpMsg="我的消息" icon={<MessageOutlined />} footer={null} >
        <NoticeList />
      </BasicModal>
    </>
  )
}
