"use client"

import { Dialog, DialogContent, DialogHeader } from "./ui/dialog"
import { useEditProjectDialog } from "@/hooks/use-edit-project-dialog"
import { Separator } from "./ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ScrollArea } from "./ui/scroll-area"
import { ProjectForm } from "./project-form"

export const EditProjectDialog = () => {
  const [isOpen, onClose, projectId] = useEditProjectDialog(s => [s.isOpen, s.onClose, s.projectId])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>Edit project</DialogHeader>
        <Separator className="space-y-4" />
        <Tabs defaultValue="info" className="flex">
          <TabsList className=" flex flex-col justify-start h-full w-[200px]">
            <TabsTrigger value="info" className="w-full">Baisc info</TabsTrigger>
            <TabsTrigger value="members" className="w-full">Members</TabsTrigger>
          </TabsList>
          <ScrollArea className="w-full h-[600px]">
            <TabsContent value="info" className="flex-1">
              <ProjectForm projectId={projectId} />
            </TabsContent>
            <TabsContent value="members">

            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
