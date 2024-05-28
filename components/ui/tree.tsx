"use client";
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight, type LucideIcon } from "lucide-react";
import useResizeObserver from "use-resize-observer";
import { ScrollArea } from "./scroll-area";
import { cn } from "@/lib/utils";

interface TreeDataItem {
  id: string;
  name: string;
  icon?: LucideIcon,
  children?: TreeDataItem[];
}

type TreeProps = {
  className?: string
  data: TreeDataItem[] | TreeDataItem,
  initialSlelectedItemId?: string,
  onSelectChange?: (item: TreeDataItem | undefined) => void,
  expandAll?: boolean,
  folderIcon?: LucideIcon,
  itemIcon?: LucideIcon
  itemRender?: (item: TreeDataItem) => JSX.Element
  leafRender?: (item: TreeDataItem) => JSX.Element
}

const Tree = React.forwardRef<HTMLDivElement, TreeProps>(({
  data, initialSlelectedItemId, onSelectChange, expandAll,
  folderIcon,
  itemIcon,
  itemRender,
  leafRender,
  className, ...props
}, ref) => {
  const [selectedItemId, setSelectedItemId] = React.useState<string | undefined>(initialSlelectedItemId)
  const handleSelectChange = React.useCallback((item: TreeDataItem | undefined) => {
    setSelectedItemId(item?.id);
    if (onSelectChange) {
      onSelectChange(item)
    }
  }, [onSelectChange]);

  const expandedItemIds = React.useMemo(() => {
    if (!initialSlelectedItemId) {
      return [] as string[]
    }

    const ids: string[] = []

    function walkTreeItems(items: TreeDataItem[] | TreeDataItem, targetId: string) {
      if (items instanceof Array) {
        for (let i = 0; i < items.length; i++) {
          ids.push(items[i]!.id);
          if (walkTreeItems(items[i]!, targetId) && !expandAll) {
            return true;
          }
          if (!expandAll) ids.pop();
        }
      } else if (!expandAll && items.id === targetId) {
        return true;
      } else if (items.children) {
        return walkTreeItems(items.children, targetId)
      }
    }

    walkTreeItems(data, initialSlelectedItemId)
    return ids;
  }, [data, initialSlelectedItemId])

  const { ref: refRoot, width, height } = useResizeObserver();

  return (
    <div ref={refRoot} className={cn("overflow-hidden", className)}>
      <ScrollArea style={{ width, height }}>
        <div className="relative p-2">
          <TreeItem
            data={data}
            ref={ref}
            selectedItemId={selectedItemId}
            handleSelectChange={handleSelectChange}
            expandedItemIds={expandedItemIds}
            FolderIcon={folderIcon}
            ItemIcon={itemIcon}
            itemRender={itemRender}
            leafRender={leafRender}
            {...props}
          />
        </div>
      </ScrollArea>
    </div>
  )
})

Tree.displayName = "Tree"

type TreeItemProps =
  TreeProps &
  {
    selectedItemId?: string,
    handleSelectChange: (item: TreeDataItem | undefined) => void,
    expandedItemIds: string[],
    FolderIcon?: LucideIcon,
    ItemIcon?: LucideIcon
  }

const TreeItem = React.forwardRef<
  HTMLDivElement,
  TreeItemProps
>(({ className, data, selectedItemId, handleSelectChange, expandedItemIds, FolderIcon, ItemIcon, itemRender, leafRender, ...props }, ref) => {
  return (
    <div ref={ref} role="tree" className={className} {...props}>
      <ul>
        {data instanceof Array ? (
          data.map((item) => (
            <li key={item.id}>
              {item.children ? (
                <AccordionPrimitive.Root type="multiple" defaultValue={expandedItemIds}>
                  <AccordionPrimitive.Item value={item.id}>
                    <AccordionTrigger
                      className={cn(
                        "px-2 hover:before:opacity-100 before:absolute before:left-0 before:w-full before:opacity-0 before:bg-muted/80 before:h-[1.75rem] before:-z-10",
                        selectedItemId === item.id && "before:opacity-100 before:bg-accent text-accent-foreground before:border-l-2 before:border-l-accent-foreground/50 dark:before:border-0"
                      )}
                      onClick={() => handleSelectChange(item)}
                    >
                      {item.icon &&
                        <item.icon
                          className="h-4 w-4 shrink-0 mr-2 text-accent-foreground/50"
                          aria-hidden="true"
                        />
                      }
                      {!item.icon && FolderIcon &&
                        <FolderIcon
                          className="h-4 w-4 shrink-0 mr-2 text-accent-foreground/50"
                          aria-hidden="true"
                        />
                      }
                      {
                        itemRender
                          ? itemRender(item)
                          : <span className="text-sm truncate">{item.name}</span>
                      }
                    </AccordionTrigger>
                    <AccordionContent className="pl-6">
                      <TreeItem
                        data={item.children ? item.children : item}
                        selectedItemId={selectedItemId}
                        handleSelectChange={handleSelectChange}
                        expandedItemIds={expandedItemIds}
                        FolderIcon={FolderIcon}
                        ItemIcon={ItemIcon}
                        itemRender={itemRender}
                        leafRender={leafRender}
                      />
                    </AccordionContent>
                  </AccordionPrimitive.Item>
                </AccordionPrimitive.Root>
              ) : (
                <Leaf
                  item={item}
                  isSelected={selectedItemId === item.id}
                  onClick={() => handleSelectChange(item)}
                  leafRender={leafRender}
                  Icon={ItemIcon}
                />
              )}
            </li>
          ))
        ) : (
          <li>
            <Leaf
              item={data}
              isSelected={selectedItemId === data.id}
              onClick={() => handleSelectChange(data)}
              leafRender={leafRender}
              Icon={ItemIcon}
            />
          </li>
        )}
      </ul>
    </div>
  );
})
TreeItem.displayName = "TreeItem"

const Leaf = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    item: TreeDataItem, isSelected?: boolean,
    Icon?: LucideIcon,
    leafRender?: (item: TreeDataItem) => JSX.Element
  }
>(({ className, item, isSelected, leafRender, Icon, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center py-2 px-2 cursor-pointer \
        hover:before:opacity-100 before:absolute before:left-0 before:right-1 before:w-full before:opacity-0 before:bg-muted/80 before:h-[1.75rem] before:-z-10",
        className,
        isSelected && "before:opacity-100 before:bg-accent text-accent-foreground before:border-l-2 before:border-l-accent-foreground/50 dark:before:border-0"
      )}
      {...props}
    >
      {item.icon && <item.icon className="h-4 w-4 shrink-0 mr-2 text-accent-foreground/50" aria-hidden="true" />}
      {!item.icon && Icon && <Icon className="h-4 w-4 shrink-0 mr-2 text-accent-foreground/50" aria-hidden="true" />}
      {
        leafRender
          ? leafRender(item)
          : <span className="flex-grow text-sm truncate">{item.name}</span>
      }
    </div>
  );
})

Leaf.displayName = "Leaf"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 w-full items-center py-2 transition-all last:[&[data-state=open]>svg]:rotate-90",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200 text-accent-foreground/50 ml-auto" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-1 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Tree, type TreeDataItem }
