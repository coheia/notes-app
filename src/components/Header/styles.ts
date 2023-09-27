import styled from '@emotion/styled'

export const Header = styled('header')`
  margin-top: 64px;
  display: grid;
  grid-template-areas:
    's s s s s'
    'c c c c a'
    'p p p p p';

  @media (max-width: 900px) {
    grid-template-areas:
      's s s s s'
      'c c c c c'
      'a a a a a'
      'p p p p p';
  }
`
