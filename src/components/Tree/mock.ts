import type { TreeNode } from '.'

export const treeData: TreeNode[] = [
  {
    id: 1,
    label: '技术团队文档示例',
    children: [
      {
        id: 2,
        label: '项目管理',
        children: [
          {
            id: 21,
            label: '项目管理-1-1-1-1',
            children: [
              { id: 233, label: '项目管理-1-1-1-1-1' },
              { id: 234, label: '项目管理-1-1-1-1-2' },
            ],
          },
          {
            id: 22,
            label: '项目管理-1-1-1-2',
          },
          {
            id: 23,
            label: '项目管理-1-1-1-3',
          },
          {
            id: 24,
            label: '项目管理-1-1-1-4',
          },
        ],
      },
      {
        id: 3,
        label: '产品设计',
      },
      {
        id: 4,
        label: '技术开发',
      },
      {
        id: 5,
        label: '测试',
      },
      {
        id: 6,
        label: '运维',
      },
      {
        id: 7,
        label: '运营',
      },
      {
        id: 8,
        label: '市场',
      },
      {
        id: 9,
        label: '人事',
      },
      {
        id: 10,
        label: '财务',
      },
      {
        id: 11,
        label: '法务',
      },
      {
        id: 12,
        label: '行政',
      },
      {
        id: 13,
        label: '客服',
      },
      {
        id: 14,
        label: '销售',
      },
      {
        id: 15,
        label: '售后',
      },
      {
        id: 16,
        label: '采购',
      },
      {
        id: 17,
        label: '仓储',
      },
      {
        id: 18,
        label: '物流',
      },
      {
        id: 19,
        label: '外包',
      },
      {
        id: 20,
        label: '其他',
      },
    ],
  },
]
