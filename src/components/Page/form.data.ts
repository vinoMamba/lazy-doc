import { FormSchema } from "../Form/type";

export const formSchemas: FormSchema[] = [
  {
    field: 'desc',
    label: '功能描述',
    component: 'TextArea',
    span: 24
  },
  {
    field: 'reqProtocol',
    label: ' 请求协议',
    component: 'Select',
    span: 8
  },
  {
    field: 'url',
    label: '请求URL',
    component: 'Input',
    span: 8
  },
  {
    field: 'reqMethod',
    label: ' 请求方法',
    component: 'Select',
    span: 8
  },
  {
    field: 'reqData',
    label: ' 请求参数格式定义',
    component: 'Select',
    span: 24
  },
  {
    field: 'reqParams',
    label: '请求数据字段说明',
    component: 'Select',
    span: 24
  },
  {
    field: 'resData',
    label: ' 返回数据json格式定义',
    component: 'Select',
    span: 24
  },
  {
    field: 'resBody',
    label: '返回数据字段说明',
    component: 'Select',
    span: 24
  },
  {
    field: 'remark',
    label: '备注',
    component: 'TextArea',
    span: 24
  },
]
