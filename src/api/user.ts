import axios from 'axios'

export interface RegisterParams {
  username: string
  password: string
  confirmPassword: string
}

export async function registerFetcher(url: string, { arg }: { arg: RegisterParams }) {
  const res = await axios.post<Result<{ email: string; username: string }>>(url, arg)
  return res.data
}
