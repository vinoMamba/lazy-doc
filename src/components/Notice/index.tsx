import { MessageOutlined } from "@ant-design/icons"
import { useState } from "react"
import { Modal } from "antd"
import { ModalTitle } from "./components/NoticeTitle"
import { Icon } from "../Icon"
import { NoticeList } from "./components/NoticeList"


const TITLE = "我的消息"

export const Notice = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Icon helpMsg={TITLE} onClick={() => setIsModalOpen(true)}><MessageOutlined /></Icon>
      <Modal
        width={900}
        title={<ModalTitle title={TITLE} />}
        open={isModalOpen} footer={null}
        onCancel={() => setIsModalOpen(false)}>
        <NoticeList />
      </Modal>
    </>
  )
}
