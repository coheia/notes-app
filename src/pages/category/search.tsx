import LoadingNotes from '@/components/ListNotes/Loading'
import { type Category } from '@/data/models/Category'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

const ListNotes = dynamic(() => import('@/components/ListNotes/ListNotes'), {
  ssr: false,
  loading: () => <LoadingNotes />
})

interface SearchNotesProps {
  category: Category | null
}

const SearchNotes: NextPage<SearchNotesProps> = ({ category }) => {
  const router = useRouter()
  const title = `${router.query.q || ''} - Notes App`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <ListNotes byTerm={router.query.q as string} />
    </>
  )
}

export default SearchNotes
