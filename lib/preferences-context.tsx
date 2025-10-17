"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

// ==== Tipos base ====
export type Theme = "dark" | "light"
export type AccentColor = "red" | "blue" | "green" | "purple" | "orange"
export type FontSize = "small" | "medium" | "large"
export type Language = "en" | "es"

export interface Preferences {
  theme: Theme
  accentColor: AccentColor
  fontSize: FontSize
  language: Language
  animationsEnabled: boolean
  sidebarAutoExpand: boolean
}

interface PreferencesContextType {
  preferences: Preferences
  updatePreferences: (changes: Partial<Preferences>) => void
  resetPreferences: () => void
}

// ==== Valores por defecto ====
const DEFAULT_PREFERENCES: Preferences = {
  theme: "dark",
  accentColor: "red",
  fontSize: "medium",
  language: "en",
  animationsEnabled: true,
  sidebarAutoExpand: false,
}

const STORAGE_KEY = "portfolio-preferences"

// ==== Contexto ====
const PreferencesContext = createContext<PreferencesContextType | undefined>(undefined)

// ==== Utilidades de almacenamiento ====
const loadPreferences = (): Preferences => {
  if (typeof window === "undefined") return DEFAULT_PREFERENCES
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...DEFAULT_PREFERENCES, ...JSON.parse(saved) } : DEFAULT_PREFERENCES
  } catch {
    return DEFAULT_PREFERENCES
  }
}

const savePreferences = (prefs: Preferences) => {
  if (typeof window === "undefined") return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
}

// ==== Aplicación visual ====
const applyPreferences = (prefs: Preferences) => {
  if (typeof document === "undefined") return
  const html = document.documentElement

  html.classList.toggle("dark", prefs.theme === "dark")

  const colors: Record<AccentColor, string> = {
    red: "220 38 38",
    blue: "59 130 246",
    green: "34 197 94",
    purple: "168 85 247",
    orange: "249 115 22",
  }
  html.style.setProperty("--accent-color", colors[prefs.accentColor])

  const sizes: Record<FontSize, string> = {
    small: "0.875rem",
    medium: "1rem",
    large: "1.125rem",
  }
  html.style.setProperty("--base-font-size", sizes[prefs.fontSize])

  html.classList.toggle("no-animations", !prefs.animationsEnabled)
  html.setAttribute("lang", prefs.language)
}

// ==== Provider principal ====
export function PreferencesProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<Preferences>(DEFAULT_PREFERENCES)
  const [initialized, setInitialized] = useState(false)

  // Cargar preferencias al inicio
  useEffect(() => {
    const loaded = loadPreferences()
    setPreferences(loaded)
    applyPreferences(loaded)
    setInitialized(true)
  }, [])

  // Aplicar cuando cambien
  useEffect(() => {
    if (initialized) applyPreferences(preferences)
  }, [preferences, initialized])

  const updatePreferences = (changes: Partial<Preferences>) => {
    setPreferences(prev => {
      const updated = { ...prev, ...changes }
      savePreferences(updated)
      return updated
    })
  }

  const resetPreferences = () => {
    setPreferences(DEFAULT_PREFERENCES)
    savePreferences(DEFAULT_PREFERENCES)
    applyPreferences(DEFAULT_PREFERENCES)
  }

  return (
    <PreferencesContext.Provider value={{ preferences, updatePreferences, resetPreferences }}>
      {children}
    </PreferencesContext.Provider>
  )
}

// ==== Hooks ====
export const usePreferences = () => {
  const context = useContext(PreferencesContext)
  if (!context) throw new Error("usePreferences must be used inside PreferencesProvider")
  return context
}

// ==== Traducción sencilla ====
export const useTranslation = () => {
  const { preferences } = usePreferences()

  const translations: Record<Language, Record<string, string>> = {
    en: {
      profession: "Software Engineer",
      home: "Home",
      about: "About Me",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      settings: "Settings",
      theme: "Theme",
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      accentColor: "Accent Color",
      fontSize: "Font Size",
      language: "Language",
      animations: "Animations",
      enabled: "Enabled",
      disabled: "Disabled",
      saveChanges: "Save Changes",
      cancel: "Cancel",
      small: "Small",
      medium: "Medium",
      large: "Large",
    },
    es: {
      profession: "Ingeniero de Software",
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      settings: "Configuración",
      theme: "Tema",
      darkMode: "Modo oscuro",
      lightMode: "Modo claro",
      accentColor: "Color de acento",
      fontSize: "Tamaño de fuente",
      language: "Idioma",
      animations: "Animaciones",
      enabled: "Habilitado",
      disabled: "Deshabilitado",
      saveChanges: "Guardar cambios",
      cancel: "Cancelar",
      small: "Pequeño",
      medium: "Mediano",
      large: "Grande",
    },
  }

  const t = (key: string) => translations[preferences.language][key] || key

  return { t, lang: preferences.language }
}
