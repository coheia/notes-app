import { type Category } from '@/data/models/Category'
import { useRouter } from 'next/router'
import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'
import * as S from './styles'

interface CategoryMenuProps {
  categories: Category[]
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
  const { query } = useRouter()

  return (
    <S.Wrapper>
      {categories.map(category => (
        <CategoryItem
          key={category.slug}
          label={category.name}
          link={category.link}
          active={query.slug === category.slug}
          color={category.color}
        />
      ))}
    </S.Wrapper>
  )
}
export default CategoryMenu
