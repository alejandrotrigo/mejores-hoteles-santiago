import 'styles/globals.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightTheme } from '@/themes'
import { UiProvider } from '@/context/ui'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <UiProvider>
      <ThemeProvider theme={ lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UiProvider>
    </>
  )
}
