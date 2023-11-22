import axios from 'axios'

interface BaseParams {
  username: string
  password: string
}

export interface RegisterParams extends BaseParams {
  confirmPassword: string
}

export async function registerFetcher(url: string, { arg }: { arg: RegisterParams }) {
  const res = await axios.post<Result<{ email: string; username: string }>>(url, arg)
  return res.data
}

export interface LoginParams extends BaseParams { }
export interface LoginResult extends BaseParams {
  token: string
}

export async function LoginFetcher(url: string, { arg }: { arg: LoginParams }) {
  const res = await axios.post<Result<LoginResult>>(url, arg)
  return res.data
}
