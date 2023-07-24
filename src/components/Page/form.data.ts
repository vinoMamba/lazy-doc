import { FormSchema } from "../Form/type";

export const formSchemas: FormSchema[] = [
  {
    field: 'desc',
    label: '功能描述',
    component: 'TextArea'
  },
  {
    field: 'url',
    label: '请求URL',
    component: 'Input'
  },
  {
    field: 'reqProtocol',
    label: ' 请求协议',
    component: 'Select'
  },
  {
    field: 'reqMethod',
    label: ' 请求方法',
    component: 'Select'
  },
  {
    field: 'reqData',
    label: ' 请求参数格式定义',
    component: 'Select'
  },
  {
    field: 'reqParams',
    label: '请求数据字段说明',
    component: 'Select'
  },
  {
    field: 'resData',
    label: ' 返回数据json格式定义',
    component: 'Select'
  },
  {
    field: 'resBody',
    label: '返回数据字段说明',
    component: 'Select'
  },
  {
    field: 'remark',
    label: '备注',
    component: 'TextArea'
  },
]
