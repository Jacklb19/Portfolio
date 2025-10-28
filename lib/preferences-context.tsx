"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

// ==== Tipos base ====
export type Theme = "dark" | "light" | "system"
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
  theme: "system",
  accentColor: "red",
  fontSize: "medium",
  language: "en",
  animationsEnabled: true,
  sidebarAutoExpand: true,
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

// ==== Detectar tema del sistema ====
const getSystemTheme = (): "dark" | "light" => {
  if (typeof window === "undefined") return "dark"
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

// ==== Aplicación visual ====
const applyPreferences = (prefs: Preferences, systemTheme?: "dark" | "light") => {
  if (typeof document === "undefined") return
  const html = document.documentElement

  // Determinar el tema real a aplicar
  const actualTheme = prefs.theme === "system" ? (systemTheme || getSystemTheme()) : prefs.theme
  html.classList.toggle("dark", actualTheme === "dark")

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
  const [systemTheme, setSystemTheme] = useState<"dark" | "light">("dark")

  // Cargar preferencias al inicio
  useEffect(() => {
    const loaded = loadPreferences()
    const currentSystemTheme = getSystemTheme()
    setSystemTheme(currentSystemTheme)
    setPreferences(loaded)
    applyPreferences(loaded, currentSystemTheme)
    setInitialized(true)
  }, [])

  // Escuchar cambios en el tema del sistema
  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? "dark" : "light"
      setSystemTheme(newSystemTheme)
      
      // Solo aplicar si el usuario tiene seleccionado "system"
      if (preferences.theme === "system") {
        applyPreferences(preferences, newSystemTheme)
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [preferences])

  // Aplicar cuando cambien las preferencias
  useEffect(() => {
    if (initialized) {
      applyPreferences(preferences, systemTheme)
    }
  }, [preferences, initialized, systemTheme])

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
    applyPreferences(DEFAULT_PREFERENCES, systemTheme)
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
      systemMode: "System",
      accentColor: "Accent Color",
      fontSize: "Font Size",
      language: "Language",
      layoutPreferences: "Layout Preferences",
      sidebarAutoExpand: "Sidebar Auto Expand",
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
      systemMode: "Sistema",
      accentColor: "Color de acento",
      fontSize: "Tamaño de fuente",
      language: "Idioma",
      layoutPreferences: "Preferencias de diseño",
      sidebarAutoExpand: "Expansión automática del menú",
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
