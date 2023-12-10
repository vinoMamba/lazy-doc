import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useMessage } from '@/hooks/useMessage'

const http = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export function useHttp() {
  const { message } = useMessage()
  const httpRequest = async <T>(url: string, config: AxiosRequestConfig) => {
    return http.request<T>({
      url,
      ...config,
    }).catch((err) => {
      message.error(err.response?.data?.message || '请求失败')
      throw err
    })
  }
  return {
    get: async <T>(path: string, config?: AxiosRequestConfig) => {
      return httpRequest<T>(path, { ...config, method: 'get' })
    },
    post: async <T>(path: string, data: JSONValue) => {
      return httpRequest<T>(path, { data, method: 'post' })
    },
    put: async <T>(path: string, data: JSONValue) => {
      return httpRequest<T>(path, { data, method: 'put' })
    },
    remove: async <T>(path: string, config?: AxiosRequestConfig<unknown>) => {
      return httpRequest<T>(path, { ...config, method: 'delete' })
    },
  }
}
