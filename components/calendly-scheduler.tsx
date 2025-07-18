"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"

interface CalendlyEventType {
  uri: string
  name: string
  slug: string
  duration: number
  scheduling_url: string
  description_plain?: string
  color: string
}

export function CalendlyScheduler() {
  const [eventTypes, setEventTypes] = useState<CalendlyEventType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchEventTypes()
  }, [])

  const fetchEventTypes = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/calendly/event-types")

      if (!response.ok) {
        throw new Error("Failed to fetch event types")
      }

      const data = await response.json()
      setEventTypes(data.eventTypes || [])
    } catch (err) {
      console.error("Error fetching event types:", err)
      setError("Unable to load scheduling options. Please try the direct link below.")
    } finally {
      setLoading(false)
    }
  }

  const openCalendlyPopup = (url: string) => {
    // Open in new window/tab as fallback
    window.open(url, "_blank", "width=800,height=600")
  }

  if (loading) {
    return (
      <Card className="w-full  max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Schedule a Meeting
          </CardTitle>
          <CardDescription>Loading available meeting times...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white ">
          <Calendar className="h-5 w-5 " />
          Schedule a Meeting
        </CardTitle>
        <CardDescription>Choose a meeting type and schedule a time that works for you</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">{error}</p>
          </div>
        )}

        {eventTypes.length > 0 ? (
          <div className="grid gap-4">
            {eventTypes.map((eventType) => (
              <div
                key={eventType.uri}
                className="flex items-center justify-between p-4 border rounded-lg transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-white ">{eventType.name}</h3>
                  <div className="flex items-center gap-4 mt-1 text-sm text-white -600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-white " />
                      {eventType.duration} minutes
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      One-on-one
                    </span>
                  </div>
                  {eventType.description_plain && (
                    <p className="text-sm text-white -600 mt-2">{eventType.description_plain}</p>
                  )}
                </div>
                <Button onClick={() => openCalendlyPopup(eventType.scheduling_url)} className="ml-4">
                  Schedule
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-white -400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Direct Scheduling</h3>
            <p className="text-white -600 mb-4">Schedule a meeting directly through our Calendly link</p>
            <Button
              onClick={() => openCalendlyPopup("https://calendly.com/mykhailo-bielichenko/investor-meeting")}
              size="lg"
            >
              Schedule Investor Meeting
            </Button>
          </div>
        )}

        <div className="pt-4 border-t">
          <p className="text-sm text-white -500 text-center">
            Having trouble? Email us directly at{" "}
            <a href="mailto:belichenko_@ukr.net" className="text-white hover:underline">
              belichenko_@ukr.net
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
