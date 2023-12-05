import type { UserInfo } from '@/store/useUser'
import { useHttp } from '@/shared/http'

const { put, post } = useHttp()

interface BaseParams {
  email: string
  password: string
}

export interface RegisterParams extends BaseParams {
  confirmPassword: string
}
export async function registerFetcher(url: string, { arg }: { arg: RegisterParams }) {
  const res = await post<{ email: string }>(url, arg)
  return res.data
}

export interface LoginParams extends BaseParams { }
export interface LoginResult extends UserInfo { }
export async function LoginFetcher(url: string, { arg }: { arg: LoginParams }) {
  const res = await post<LoginResult>(url, arg)
  return res.data
}

export interface ModifyPasswordParams {
  oldPassword: string
  newPassword: string
}

export async function updatePwdFetcher(url: string, { arg }: { arg: ModifyPasswordParams }) {
  const res = await put(url, arg)
  return res.data
}
