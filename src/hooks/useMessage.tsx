import { App } from 'antd'

export function useMessage() {
  const { message, modal, notification } = App.useApp()
  return {
    message,
    modal,
    notification,
  }
}
