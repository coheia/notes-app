import AddNote from '@/components/AddNote/AddNote'
import CategoryMenu from '@/components/CategoryMenu/CategoryMenu'
import SearchBar from '@/components/SearchBar/SearchBar'
import { categories } from '@/data/category.mock'
import Container from '@mui/material/Container'
import React from 'react'
import * as S from './styles'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Container fixed>
      <S.Header>
        <SearchBar />
        <CategoryMenu categories={categories} />
        <AddNote />
      </S.Header>
    </Container>
  )
}
export default Header
