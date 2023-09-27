import React from 'react'
import * as S from './styles'
import { Typography } from '@mui/material'
import Image from 'next/image'

interface NotFoundProps {
  asset: string
  title: string
}

const NotFound: React.FC<NotFoundProps> = ({ asset, title }) => {
  return (
    <S.Wrapper>
      <Typography className="title">{title}</Typography>
      <Image src={asset} width={258} height={257} alt={title} />
    </S.Wrapper>
  )
}
export default NotFound
