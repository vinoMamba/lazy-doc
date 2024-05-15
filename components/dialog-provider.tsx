"use client";

import { useEffect, useState } from "react";
import { ProejctDialog } from "./project/project-dialog";
import { ProjectEditDialog } from "./project/project-edit-dialog";
import { AddMembersDialog } from "./project/add-members-dialog";


export const DialogProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <ProejctDialog />
      <ProjectEditDialog />
      <AddMembersDialog />
    </>
  )
}
