import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { useEditProjectDialog } from "@/hooks/use-edit-project-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ProjectForm } from "./project-form";


export const ProjectEditDialog = () => {
  const [isOpen, onClose, projectId] = useEditProjectDialog(s => [s.isOpen, s.onClose, s.projectId])
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit project</DialogTitle>
        </DialogHeader>
        <div>
          <Tabs defaultValue="info">
            <TabsList>
              <TabsTrigger value="info">Project info</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <ProjectForm projectId={projectId} />
            </TabsContent>
            <TabsContent value="members">members</TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
