import type { FC } from 'react'
import { useProjectList } from '@/api/useProjectList'

export const ProjectList: FC = () => {
  const { list } = useProjectList()

  return (
    <div>{JSON.stringify(list)}</div>
  )
}
