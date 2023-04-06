import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { DiscordProvider } from '../context/context'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  return (      
      <DiscordProvider>
      <Component {...pageProps} />
      </DiscordProvider>
      )
}
