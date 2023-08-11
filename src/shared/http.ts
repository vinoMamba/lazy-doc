import axios, { AxiosError, AxiosRequestConfig } from 'axios'

export const http = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || ''
  config.headers = config.headers || {}
  if (token) { config.headers.Authorization = `Bearer ${token}` }
  return config
})

export const useHttp = () => {
  const onError = (error: AxiosError) => {
    console.log(error)
    throw error
  }

  return {
    get: async <T>(path: string, config?: AxiosRequestConfig<unknown>) => {
      return http.get<Result<T>>(path, config).catch(onError)
    },
    post: async <T>(path: string,data:JSONValue) => {
      return http.post<Result<T>>(path,data).catch(onError)
    },
  }
}
