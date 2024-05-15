"use client"
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { useEditProjectDialog } from "@/hooks/use-edit-project-dialog";
import { ProjectForm } from "./project-form";
import { Button } from "../ui/button";
import { useState } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import { Separator } from "../ui/separator";
import { Members } from "./members";


export const ProjectEditDialog = () => {
  const [currentTab, setCurrentTab] = useState('info')
  const [isOpen, onClose, projectId] = useEditProjectDialog(s => [s.isOpen, s.onClose, s.projectId])
  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className=" max-w-screen-lg top-[40%]">
        <DialogHeader>
          <DialogTitle>Edit project</DialogTitle>
        </DialogHeader>
        <div className="flex w-full gap-4">
          <nav className="h-full w-1/4 flex flex-col gap-2">
            <Button onClick={() => setCurrentTab('info')} variant={currentTab === 'info' ? 'secondary' : 'ghost'}>Project info</Button>
            <Button onClick={() => setCurrentTab('members')} variant={currentTab === 'members' ? 'secondary' : 'ghost'}>Members</Button>
          </nav>
          <Separator orientation="vertical" />
          <AspectRatio ratio={16 / 7}>
            {
              currentTab === 'info'
                ? <ProjectForm projectId={projectId} />
                : <Members />
            }
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  );
}
