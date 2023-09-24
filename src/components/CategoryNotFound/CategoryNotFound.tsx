import React from 'react'
import * as S from './styles'
import { Container } from '@mui/material'

interface CategoryNotFoundProps {}

const CategoryNotFound: React.FC<CategoryNotFoundProps> = () => {
  return (
    <Container fixed>
      <S.Wrapper>
        <div>Category not found.</div>
      </S.Wrapper>
    </Container>
  )
}
export default CategoryNotFound
