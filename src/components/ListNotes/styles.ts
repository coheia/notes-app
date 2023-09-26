import styled from '@emotion/styled'
import { Container } from '@mui/material'

export const gapListNotes = '16px'

export const Wrapper = styled('div')``
export const ListNotes = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${gapListNotes};
  margin-top: 24px;
`

export const ContainerStyled = styled(Container)`
  justify-content: center;
  display: flex;
`
