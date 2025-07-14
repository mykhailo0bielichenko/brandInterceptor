"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"
import { LoginModal } from "./login-modal"
import { SignupModal } from "./signup-modal"

interface AuthContextType {
  openLogin: () => void
  openSignup: () => void
  closeModals: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)

  const openLogin = () => {
    setSignupOpen(false)
    setLoginOpen(true)
  }

  const openSignup = () => {
    setLoginOpen(false)
    setSignupOpen(true)
  }

  const closeModals = () => {
    setLoginOpen(false)
    setSignupOpen(false)
  }

  const switchToSignup = () => {
    setLoginOpen(false)
    setSignupOpen(true)
  }

  const switchToLogin = () => {
    setSignupOpen(false)
    setLoginOpen(true)
  }

  return (
    <AuthContext.Provider value={{ openLogin, openSignup, closeModals }}>
      {children}
      <LoginModal isOpen={loginOpen} onClose={closeModals} onSwitchToSignup={switchToSignup} />
      <SignupModal isOpen={signupOpen} onClose={closeModals} onSwitchToLogin={switchToLogin} />
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
