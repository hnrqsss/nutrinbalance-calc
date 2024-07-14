'use client'

import { theme } from '@/styles/theme'
import { ThemeProvider } from '@mui/material'
import { ReactNode } from 'react'
import { StageProvider } from './StageProvider'

type Props = {
    children: ReactNode
}

export default function GlobalProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
        <StageProvider>
            {children}
        </StageProvider>
    </ThemeProvider>
  )
}
