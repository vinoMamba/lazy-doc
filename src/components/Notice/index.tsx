import { MessageOutlined } from "@ant-design/icons"
import { NoticeList } from "./components/NoticeList"
import { BasicModal, useModal } from "../Modal"
import { Icon } from "../Icon"

export const Notice = () => {
  const helpMsg = "我的消息"
  const [modalRef, { open }] = useModal({
    width: 900,
    title: helpMsg,
    footer: null
  })
  return (
    <>
      <Icon helpMsg={helpMsg} onClick={() => open()}><MessageOutlined /></Icon>
      <BasicModal ref={modalRef}>
        <NoticeList />
      </BasicModal>
    </>
  )
}
