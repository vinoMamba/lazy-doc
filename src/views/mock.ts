import { PageItem, ReqParam, ReqMethod, ReqProtocol } from "/@/types";

const reqData = {
  username: 'vino',
  password: '123456'
}

const resData = {
  userId: "1",
  username: 'vino'
}

const keys = Object.keys(reqData)
const reqParams = keys.map(key => {
  return {
    isRequired: true,
    fieldName: key,
    type: 'string',
    desc: key
  } as ReqParam
})

export const pageData: PageItem = {
  pageId: '1',
  pageTitle: '登录接口',
  desc: '使用账号密码登录',
  url: '/login/password',
  reqProtocol: ReqProtocol.HTTP,
  reqMethod: ReqMethod.POST,
  reqHeaders: [
    {
      name: 'content-type',
      value: 'pplication/json'
    }
  ],
  reqData: JSON.stringify(reqData),
  reqParams: reqParams,
  resData: JSON.stringify(resData),
  resBody: [
    {
      fieldName: 'userId',
      type: 'string',
      desc: '用户ID'
    },
    {
      fieldName: 'username',
      type: 'string',
      desc: '用户名'
    }
  ]
}
