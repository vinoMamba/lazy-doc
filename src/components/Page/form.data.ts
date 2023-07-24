import { FormSchema } from "../Form/type";
import { ReqMethod, ReqProtocol } from "/@/types";

export const formSchemas: FormSchema[] = [
  {
    field: 'desc',
    label: '功能描述',
    component: 'TextArea',
    componentProps: {
      maxLength: 100,
      showCount: true,
      placeholder: '简要描述下接口功能'
    },
    span: 24,
    required: true
  },
  {
    field: 'reqProtocol',
    label: ' 请求协议',
    component: 'Select',
    componentProps: {
      options: [
        { value: 0, label: ReqProtocol.HTTP },
        { value: 1, label: ReqProtocol.HTTPS },
      ]
    },
    span: 8
  },
  {
    field: 'url',
    label: '请求URL',
    component: 'Input',
    span: 8,
    required: true
  },
  {
    field: 'reqMethod',
    label: ' 请求方法',
    component: 'Select',
    componentProps: {
      options: [
        { value: 0, label: ReqMethod.GET },
        { value: 1, label: ReqMethod.POST },
        { value: 2, label: ReqMethod.PUT },
        { value: 3, label: ReqMethod.DELETE },
      ]
    },
    span: 8
  },
  {
    field: 'reqData',
    label: ' 请求参数格式定义',
    component: 'ByteEditor',
    componentProps: () => {
      return {
        value: '# code',
        onChange(value: string) {
          console.log('11111')
          console.log(value)
        }

      }
    },
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
