import Header from '@/components/Header/Header'
import { NotesProvider } from '@/data/repositories/Notes'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <NotesProvider>
        <Header />
        <Component {...pageProps} />
      </NotesProvider>
    </main>
  )
}
