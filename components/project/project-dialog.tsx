import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ProjectForm } from "./project-form";
import { useProjectDialog } from "@/hooks/use-project-dialog";

export const ProejctDialog = () => {
  const [isOpen, onClose] = useProjectDialog(s => [s.isOpen, s.onClose])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add project</DialogTitle>
        </DialogHeader>
        <div>
          <ProjectForm onFinish={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
