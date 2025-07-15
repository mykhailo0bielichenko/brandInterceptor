import { NextResponse } from "next/server"
import { calendlyAPI } from "@/lib/calendly"

export async function GET() {
  try {
    const user = await calendlyAPI.getCurrentUser()
    return NextResponse.json({ user })
  } catch (error) {
    console.error("Calendly API error:", error)
    return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 })
  }
}
