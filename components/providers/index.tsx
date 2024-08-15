'use client'

import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </>
  )
}
