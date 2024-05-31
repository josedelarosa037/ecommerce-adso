import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { SessionProvider } from "next-auth/react"

import {lightTheme} from '../themes'

export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps } />
      </ThemeProvider> 
    </SessionProvider>
  )
}
