import { type FC, useState } from 'react'
import { Avatar, Button, Modal, Typography } from 'antd'
import { SvgIcon } from '@/components/Icon'
import { useUser } from '@/store/useUser'

const { Text } = Typography
const Icon = <SvgIcon icon="mdi:account-circle" className="text-xl" />

export const UserIcon: FC = () => {
  const [open, setOpen] = useState(false)
  const [u] = useUser(s => [s.userInfo])
  return (
    <>
      <Button onClick={() => setOpen(true)} icon={Icon} />
      <Modal
        width={320}
        open={open}
        onCancel={() => setOpen(false)}
        closable={false}
        footer={null}
        title={(
          <span className="flex items-center gap-1">
            {Icon}
            <span>用户信息</span>
          </span>
        )}
      >
        <div className=" flex items-center gap-1">
          <Avatar size={48} src={u?.avatar} />
          <div className=" flex flex-col gap-1 p-4">
            <div>{u?.username}</div>
            <div className="text-sm text-gray-500">{u?.email}</div>
          </div>
        </div>
        <footer className=" flex flex-col gap-2 mt-4">
          <Button>修改密码</Button>
          <Button>退出登录</Button>
        </footer>
      </Modal>
    </>
  )
}
