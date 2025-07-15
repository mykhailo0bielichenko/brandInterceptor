import { NextResponse } from "next/server"
import { calendlyAPI } from "@/lib/calendly"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const eventTypeUri = searchParams.get("event_type")
  const startDate = searchParams.get("start_date")
  const endDate = searchParams.get("end_date")

  if (!eventTypeUri || !startDate || !endDate) {
    return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
  }

  try {
    const availability = await calendlyAPI.getAvailability(eventTypeUri, startDate, endDate)
    return NextResponse.json({ availability })
  } catch (error) {
    console.error("Calendly API error:", error)
    return NextResponse.json({ error: "Failed to fetch availability" }, { status: 500 })
  }
}
