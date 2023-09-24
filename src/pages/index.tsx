import { categories } from '@/data/category.mock'
import { GetServerSideProps, NextPage } from 'next'

const Home: NextPage = () => {
  return <></>
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  const category = categories.find(category => category.slug === 'all')

  return {
    props: {},
    redirect: {
      destination: category?.link,
      permanent: true
    }
  }
}
