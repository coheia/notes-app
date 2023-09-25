import styled from '@emotion/styled'

export const Wrapper = styled('div')`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  grid-area: a;

  @media (max-width: 900px) {
    justify-content: center;
  }
`
