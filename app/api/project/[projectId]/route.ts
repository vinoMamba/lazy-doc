import { getProjectById, getUserIdsByProjectId } from "@/data/project";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { projectId: string } }) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const project = await getProjectById(params.projectId)
    const projectUserIds = await getUserIdsByProjectId(params.projectId)

    return NextResponse.json(
      {
        ...project,
        userIds: projectUserIds
      }
    )

  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
