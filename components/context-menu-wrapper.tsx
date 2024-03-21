import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "./ui/context-menu"

type Props = {
  children: React.ReactNode
  menuList: Array<{ id: string, item: React.ReactNode }>
}

export const ContextMenuWrapper = ({ children, menuList }: Props) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="w-full">
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        {menuList.map((menu) => {
          return (
            <>
              <ContextMenuItem key={menu.id}>
                {menu.item}
              </ContextMenuItem>
              <ContextMenuSeparator />
            </>
          )
        })}
      </ContextMenuContent>
    </ContextMenu>
  )
}
