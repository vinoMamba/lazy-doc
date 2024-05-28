interface TreeHelperConfig {
  id: string
  children: string
  pid: string
}

const DEFAULT_CONFIG: TreeHelperConfig = {
  id: 'id',
  children: 'children',
  pid: 'parentId',
}

const getConfig = (config: Partial<TreeHelperConfig>) => Object.assign({}, DEFAULT_CONFIG, config)

export function listToTree<T = any>(list: any[], config: Partial<TreeHelperConfig> = {}): T[] {
  const conf = getConfig(config) as TreeHelperConfig
  const nodeMap = new Map()
  const result: T[] = []
  const { id, children, pid } = conf

  for (const node of list) {
    nodeMap.set(node[id], node)
  }
  for (const node of list) {
    const parent = nodeMap.get(node[pid]);
    if (parent) {
      const list = parent[children] || []
      list.push(node)
      parent[children] = list
    } else {
      result.push(node)
    }
  }
  return result
}


export function getFirstLetter(name: string | null | undefined) {
  return name?.charAt(0).toUpperCase() || ""
}
