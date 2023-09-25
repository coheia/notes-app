import styled from '@emotion/styled'

export const Wrapper = styled('div')`
  margin-top: 24px;
  gap: 10px;
  display: flex;
  grid-area: c;
  max-width: 100%;

  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: center;
  }
`
