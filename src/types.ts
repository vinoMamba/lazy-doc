//loginParams
export type LoginParams = {
  username: string
  password: string
}
// userInfo
export interface UserInfo {
  userId: string
  username: string
  avatar: string
}
// tokenInfo
export interface TokenInfo {
  tokenValue: string
  tokenTimeout: string
}

// common PageParams
interface PageParams {
  pageNum: number
  pageSize: number
}
// common PageResult 
export interface PageResult<T> {
  total: number
  items: Array<T>
  page: number
  pageSize: number
  totalPage: number
}

// project
// project params
export interface GetProjectParams extends PageParams {
  projectName?: string
}

// ProjectItem 
export interface ProjectItem {
  projectId: string
  projectName: string
  projectGroupId: string
  description: string
  sort: number
  projectLogo: string
  createTime: string
}


//TODO: 消息通知
export type NoticeItem = {
  id: string
  type: 'update' | 'create' | 'delete'
  createTime: string
  createdBy: {
    username: string
    userId: string
  }
  pageInfo: PageItem
  remark: string
}

//TODO:  ProjectItem
export interface ProjectItem {
  id: string
  isStar: boolean
  isTop: boolean
  projectName: string
}

//TODO: PageItem
export interface PageItem {
  pageId: string
  pageTitle: string
  desc: string //功能描述
  url: string // 接口地址
  reqProtocol: ReqProtocol // 请求协议
  reqMethod: ReqMethod // 请求方法
  reqHeaders: ReqHeader[] // 请求头
  reqData: string // 请求参数data格式定义
  reqParams: ReqParam[]
  resData: string
  resBody: ResBody[]
  remark?: string
}

export enum ReqMethod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum ReqProtocol {
  HTTP = 'HTTP',
  HTTPS = 'HTTPS'
}

export interface ReqHeader {
  key: string
  name: string
  value: string
}

export interface ResBody {
  fieldName: string
  type: string
  length?: number
  desc: string
}

export interface ReqParam extends ResBody {
  isRequired: boolean
}
