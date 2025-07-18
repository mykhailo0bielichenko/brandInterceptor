const CALENDLY_API_BASE = "https://api.calendly.com"

// Use environment variable or fallback to empty string (will cause API calls to fail gracefully)
const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN || ""

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

  private isConfigured(): boolean {
    return !!CALENDLY_TOKEN && CALENDLY_TOKEN !== ""
  }

  async getCurrentUser(): Promise<CalendlyUser> {
    if (!this.isConfigured()) {
      throw new Error("Calendly API token not configured")
    }

    const response = await fetch(`${CALENDLY_API_BASE}/users/me`, {
      headers: this.headers,
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data.resource
  }

  async getEventTypes(): Promise<CalendlyEventType[]> {
    if (!this.isConfigured()) {
      console.warn("Calendly API token not configured, returning empty event types")
      return []
    }

    try {
      const user = await this.getCurrentUser()
      const response = await fetch(`${CALENDLY_API_BASE}/event_types?user=${user.uri}`, {
        headers: this.headers,
      })

      if (!response.ok) {
        throw new Error(`Failed to fetch event types: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      return data.collection || []
    } catch (error) {
      console.error("Error fetching event types:", error)
      return []
    }
  }

  async getAvailability(eventTypeUri: string, startDate: string, endDate: string): Promise<CalendlyAvailability[]> {
    if (!this.isConfigured()) {
      throw new Error("Calendly API token not configured")
    }

    try {
      const response = await fetch(
        `${CALENDLY_API_BASE}/event_type_available_times?event_type=${eventTypeUri}&start_time=${startDate}&end_time=${endDate}`,
        {
          headers: this.headers,
        },
      )

      if (!response.ok) {
        throw new Error(`Failed to fetch availability: ${response.status} ${response.statusText}`)
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
