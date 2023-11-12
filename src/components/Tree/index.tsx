import { Accordion, AccordionItem } from '@nextui-org/react'
import { type FC, useState } from 'react'
import { SvgIcon } from '../Icon'

export interface TreeNode {
  id: number
  label: string
  children?: TreeNode[]
}

interface TreeItemProps {
  node: TreeNode
  current: number
  onClick: (id: number) => void
}

const TreeItem: FC<TreeItemProps> = ({ node, onClick, current }) => {
  return node.children && node.children.length > 0
    ? (
      <Accordion key={node.id} isCompact>
        <AccordionItem
          value={node.id}
          title={node.label}
          startContent={<SvgIcon icon="octicon:file-directory-open-fill-16" />}
        >
          {node.children.map(child => (
            <TreeItem
              node={child}
              key={child.id}
              onClick={onClick}
              current={current}
            />
          ))}
        </AccordionItem>
      </Accordion>
    )
    : (
      <div
        className={`p-2 w-full cursor-pointer flex items-center rounded-md gap-3 ${current === node.id ? ' bg-default-200' : ''} `}
        key={node.id}
        onClick={() => onClick(node.id)}
      >
        <SvgIcon icon="mdi:file-document-outline" />
        {node.label}
      </div>
    )
}

export const Tree: FC<{ data: TreeNode[] }> = ({ data }) => {
  const [current, setCurrent] = useState<number>(-1)
  const handleClick = (id: number) => {
    setCurrent(id)
  }
  return (
    <>
      {
        data.map((node) => {
          return (
            <TreeItem node={node} key={node.id} onClick={handleClick} current={current} />
          )
        })
      }
    </>
  )
}
