import useSWR from "swr"
import { LoginParams, TokenInfo, UserInfo } from "../types"
import { useHttp } from "../shared/http"
import { useUser } from "../store/useUser"
import { useNavigate } from "react-router-dom"
import {message} from "antd"

export type LoginResult = {
  userInfo: UserInfo
  tokenInfo: TokenInfo
}

export const useLogin = (loginParams: LoginParams, shouldFetch: boolean) => {
  const navigate = useNavigate()
  const [setUserInfo] = useUser(state => [state.setUserInfo])
  const { post } = useHttp()

  const fetcher = async (url: string, loginParams: LoginParams) => {
    const { data } = await post<LoginResult>(url, loginParams)
    return data
  }

  const { data, isLoading } = useSWR(
    () => shouldFetch ? ["/api/login/password", loginParams] : null,
    ([url, loginParams]: [string, LoginParams]) => fetcher(url, loginParams)
  )
  if (data) {
    const { code, data: result, message: msg } = data
    if (code === 0 && result) {
      const { userInfo, tokenInfo } = result
      setUserInfo(userInfo)
      window.localStorage.setItem("token", tokenInfo.tokenValue)
      navigate("/home")
    } else {
      message.error(msg)
    }
  }

  return {
    isLoading,
  }
}
