const CALENDLY_API_BASE = "https://api.calendly.com"
const CALENDLY_TOKEN =
  process.env.CALENDLY_TOKEN ||
  "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzUyNTM4OTM3LCJqdGkiOiI2OWY2NGMzZi02YzY0LTRlODAtYjdlOC02MDMxMjQ3MGYyOWMiLCJ1c2VyX3V1aWQiOiJhZWY5MjZmMS02ZDk1LTRmZGMtYTY5OC00YjYzYmY3NTE3OWIifQ.oCJ6DbDKniFbvxseCYu0Tb51WCGt05XQtoYIG69mNJEMdjYjlKW4G-py4MIcfp2W6UNa4cl8Y33liT_Io05Mjw"

export interface CalendlyUser {
  uri: string
  name: string
  slug: string
  email: string
  scheduling_url: string
  timezone: string
  avatar_url?: string
}

export interface CalendlyEventType {
  uri: string
  name: string
  slug: string
  duration: number
  scheduling_url: string
  description_plain?: string
  color: string
}

export interface CalendlyAvailability {
  start_time: string
  end_time: string
}

class CalendlyAPI {
  private headers = {
    Authorization: `Bearer ${CALENDLY_TOKEN}`,
    "Content-Type": "application/json",
  }

  async getCurrentUser(): Promise<CalendlyUser> {
    const response = await fetch(`${CALENDLY_API_BASE}/users/me`, {
      headers: this.headers,
    })

    if (!response.ok) {
      throw new Error("Failed to fetch user data")
    }

    const data = await response.json()
    return data.resource
  }

  async getEventTypes(): Promise<CalendlyEventType[]> {
    try {
      const user = await this.getCurrentUser()
      const response = await fetch(`${CALENDLY_API_BASE}/event_types?user=${user.uri}`, {
        headers: this.headers,
      })

      if (!response.ok) {
        throw new Error("Failed to fetch event types")
      }

      const data = await response.json()
      return data.collection || []
    } catch (error) {
      console.error("Error fetching event types:", error)
      return []
    }
  }

  async getAvailability(eventTypeUri: string, startDate: string, endDate: string): Promise<CalendlyAvailability[]> {
    try {
      const response = await fetch(
        `${CALENDLY_API_BASE}/event_type_available_times?event_type=${eventTypeUri}&start_time=${startDate}&end_time=${endDate}`,
        {
          headers: this.headers,
        },
      )

      if (!response.ok) {
        throw new Error("Failed to fetch availability")
      }

      const data = await response.json()
      return data.collection || []
    } catch (error) {
      console.error("Error fetching availability:", error)
      return []
    }
  }

  // Fallback method for direct scheduling URL
  getDirectSchedulingUrl(): string {
    return "https://calendly.com/mykhailo-bielichenko/investor-meeting"
  }
}

export const calendlyAPI = new CalendlyAPI()
