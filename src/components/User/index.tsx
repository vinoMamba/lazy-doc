import { UserOutlined } from "@ant-design/icons"
import { Icon } from "../Icon"
import { BasicModal, useModal } from "../Modal"
import { useUser } from "/@/store/useUser"

export const User = () => {
  const [userInfo] = useUser(s => [s.userInfo])
  const helpMsg = "用户信息"
  const [modalRef, { open }] = useModal({
    width: 200,
    title: helpMsg,
    footer: null
  })
  return (
    <>
      <Icon helpMsg={helpMsg} onClick={() => open()}><UserOutlined /></Icon>
      <BasicModal ref={modalRef}>
        <p>{userInfo?.username || ""}</p>
        <p>{userInfo?.userId || ""}</p>
      </BasicModal>
    </>
  )
}
