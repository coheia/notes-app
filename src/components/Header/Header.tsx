import Container from '@mui/material/Container'
import React from 'react'
import SearchBar from '@/components/SearchBar/SearchBar'
import CategoryMenu from '@/components/CategoryMenu/CategoryMenu'
import * as S from './styles'
import { categories } from '@/data/category.mock'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container fixed>
      <S.Header>
        <SearchBar />
        <CategoryMenu categories={categories} />
      </S.Header>
    </Container>
  )
}
export default Header
