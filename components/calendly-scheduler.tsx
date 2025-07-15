"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ExternalLink, Loader2, AlertCircle } from "lucide-react"

interface CalendlyUser {
  name: string
  email: string
  scheduling_url: string
  timezone: string
  avatar_url?: string
}

interface CalendlyEventType {
  uri: string
  name: string
  duration: number
  scheduling_url: string
  description_plain?: string
  color: string
}

export function CalendlyScheduler() {
  const [user, setUser] = useState<CalendlyUser | null>(null)
  const [eventTypes, setEventTypes] = useState<CalendlyEventType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCalendlyData()
  }, [])

  const fetchCalendlyData = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch user data and event types in parallel
      const [userResponse, eventTypesResponse] = await Promise.all([
        fetch("/api/calendly/user"),
        fetch("/api/calendly/event-types"),
      ])

      if (userResponse.ok) {
        const userData = await userResponse.json()
        setUser(userData.user)
      }

      if (eventTypesResponse.ok) {
        const eventTypesData = await eventTypesResponse.json()
        setEventTypes(eventTypesData.eventTypes)
      }
    } catch (err) {
      console.error("Error fetching Calendly data:", err)
      setError("Unable to load scheduling data")
    } finally {
      setLoading(false)
    }
  }

  const openCalendlyWidget = (schedulingUrl: string) => {
    // Open Calendly in a popup window
    const popup = window.open(
      schedulingUrl,
      "calendly",
      "width=800,height=700,scrollbars=yes,resizable=yes,centerscreen=yes",
    )

    if (popup) {
      popup.focus()
    }
  }

  const getDirectSchedulingUrl = () => {
    return "https://calendly.com/mykhailo-bielichenko/investor-meeting"
  }

  if (loading) {
    return (
      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-8 text-center">
          <Loader2 className="h-8 w-8 animate-spin text-purple-400 mx-auto mb-4" />
          <p className="text-gray-300">Loading scheduling options...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/20">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Schedule Your Investor Meeting
        </CardTitle>
        {user && (
          <div className="flex items-center gap-3 mt-4">
            {user.avatar_url && (
              <img src={user.avatar_url || "/placeholder.svg"} alt={user.name} className="w-10 h-10 rounded-full" />
            )}
            <div>
              <p className="text-white font-semibold">{user.name}</p>
              <p className="text-gray-300 text-sm">{user.timezone}</p>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/20 rounded-lg">
            <div className="flex items-center gap-2 text-red-300">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {eventTypes.length > 0 ? (
            eventTypes.map((eventType) => (
              <div key={eventType.uri} className="p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-semibold">{eventType.name}</h4>
                    {eventType.description_plain && (
                      <p className="text-gray-300 text-sm mt-1">{eventType.description_plain}</p>
                    )}
                  </div>
                  <Badge
                    className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                    style={{ backgroundColor: `${eventType.color}20`, borderColor: `${eventType.color}50` }}
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    {eventType.duration} min
                  </Badge>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  onClick={() => openCalendlyWidget(eventType.scheduling_url)}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book This Meeting
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))
          ) : (
            // Fallback option when API data is not available
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-white font-semibold">Investor Meeting</h4>
                  <p className="text-gray-300 text-sm mt-1">
                    Discuss investment opportunity, review financial projections, and explore partnership terms
                  </p>
                </div>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <Clock className="w-3 h-3 mr-1" />
                  30 min
                </Badge>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                onClick={() => openCalendlyWidget(getDirectSchedulingUrl())}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="mt-6 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-purple-300 mt-0.5" />
              <div>
                <h4 className="text-white font-semibold mb-2">What to Expect</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Detailed idea explanation</li>
                  <li>• Financial projections review</li>
                  <li>• Technical architecture walkthrough</li>
                  <li>• Investment terms discussion</li>
                  <li>• Q&A session</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              All meetings are conducted via video call. You'll receive a calendar invite with meeting details.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
