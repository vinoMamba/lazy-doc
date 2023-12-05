import axios from 'axios'
import type { UserInfo } from '@/store/useUser'

interface BaseParams {
  email: string
  password: string
}

export interface RegisterParams extends BaseParams {
  confirmPassword: string
}

export async function registerFetcher(url: string, { arg }: { arg: RegisterParams }) {
  const res = await axios.post<{ email: string }>(url, arg)
  return res.data
}

export interface LoginParams extends BaseParams { }
export interface LoginResult extends UserInfo { }

export async function LoginFetcher(url: string, { arg }: { arg: LoginParams }) {
  const res = await axios.post<LoginResult>(url, arg)
  return res.data
}
