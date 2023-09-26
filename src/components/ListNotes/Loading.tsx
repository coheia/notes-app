import React from 'react'
import * as S from './styles'
import { CircularProgress } from '@mui/material'

interface LoadingNotesProps {}

const LoadingNotes: React.FC<LoadingNotesProps> = () => {
  return (
    <S.ContainerStyled fixed>
      <CircularProgress sx={{ mt: 10 }} />
    </S.ContainerStyled>
  )
}
export default LoadingNotes
