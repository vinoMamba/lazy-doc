import { getAllUsers } from "@/data/user";
import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    const users = await getAllUsers()
    return NextResponse.json(users)
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
