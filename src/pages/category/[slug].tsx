import Header from '@/components/Header/Header'
import LoadingNotes from '@/components/ListNotes/Loading'
import NotFound from '@/components/NotFound/NotFound'
import { categories } from '@/data/category.mock'
import { type Category } from '@/data/models/Category'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const ListNotes = dynamic(() => import('@/components/ListNotes/ListNotes'), {
  ssr: false,
  loading: () => <LoadingNotes />
})

interface SingleCategoryProps {
  category: Category | null
}

const SingleCategory: NextPage<SingleCategoryProps> = ({ category }) => {
  const title = `${category?.name || 'Category not found'} - Notes App`

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />

      {category ? (
        <ListNotes byCategory={category.slug} />
      ) : (
        <NotFound title="Category not found" asset="/search-image.svg" />
      )}
    </>
  )
}

export default SingleCategory

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug
  const category = categories.find(category => category.slug === slug)

  return {
    props: {
      category: category ? JSON.parse(JSON.stringify(category)) : null
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: any[] = []

  categories.forEach(category => {
    paths.push({
      params: {
        slug: category.slug
      }
    })
  })

  return { paths, fallback: 'blocking' }
}
