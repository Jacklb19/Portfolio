import "./globals.css"
import { PreferencesProvider } from "@/lib/preferences-context"

export const metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal de José Luis",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <PreferencesProvider>
          {children}
        </PreferencesProvider>
      </body>
    </html>
  )
}
