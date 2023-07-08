import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'

const robotoMono = localFont({
  src: [
    {
      path: '../../public/fonts/Roboto_Mono/static/RobotoMono-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Roboto_Mono/static/RobotoMono-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-roboto-mono'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${robotoMono.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
