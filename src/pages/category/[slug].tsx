import CategoryNotFound from '@/components/CategoryNotFound/CategoryNotFound'
import Header from '@/components/Header/Header'
import { categories } from '@/data/category.mock'
import { type Category } from '@/data/models/Category'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

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

      {!category ? <CategoryNotFound /> : null}
    </>
  )
}

export default SingleCategory

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = params?.slug
  const category = categories.find(category => category.slug === slug)

  return {
    props: {
      category: category ? JSON.parse(JSON.stringify(category)) : null
    }
  }
}
