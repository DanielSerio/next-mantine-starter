import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'
import { lightTheme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={lightTheme}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
