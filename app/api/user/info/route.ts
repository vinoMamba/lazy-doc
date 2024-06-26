import { getToken } from "@/lib/token"
import { NextResponse } from "next/server"

export async function GET() {
  const token = await getToken()

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const res = await fetch(`${process.env.NEXT_API_URL}/user/info`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  const result = await res.json()

  if (result.code === 0) {
    const { data } = result
    return NextResponse.json(data)
  } else {
    return NextResponse.json({ error: result.message }, { status: 500 })
  }
}
