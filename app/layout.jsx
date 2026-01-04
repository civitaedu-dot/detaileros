import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'DetailerOS',
  description: 'SaaS para Estéticas Automotivas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
