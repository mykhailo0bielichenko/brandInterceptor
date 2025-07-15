import { NextResponse } from "next/server"
import { calendlyAPI } from "@/lib/calendly"

export async function GET() {
  try {
    const eventTypes = await calendlyAPI.getEventTypes()
    return NextResponse.json({ eventTypes })
  } catch (error) {
    console.error("Calendly API error:", error)
    return NextResponse.json({ error: "Failed to fetch event types" }, { status: 500 })
  }
}
