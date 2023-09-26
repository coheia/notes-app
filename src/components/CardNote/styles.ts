import { gapListNotes } from './../ListNotes/styles'
import styled from '@emotion/styled'
import { Paper } from '@mui/material'

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  color: white;
  min-width: calc(50% - ${gapListNotes});
  box-sizing: border-box;

  &.done {
    text-decoration: line-through;
    background-color: #282e2999 !important;
  }

  .MuiTooltip-arrow {
    color: white;
  }
`
export const Header = styled('header')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  label {
    cursor: pointer;
    width: 100%;
  }

  .title {
    font-weight: 700;
    font-size: 20px;
  }

  .icons {
    display: flex;
    flex-direction: row;
  }
`

export const Body = styled('div')`
  .description {
    opacity: 0.8;
    font-size: 14px;
  }
`

export const Footer = styled('footer')`
  span {
    color: white;
    opacity: 0.6;
  }
`

export const TooltipPaper = styled(Paper)`
  margin-top: -4px;
  padding: 17px;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .header-tooltip {
    color: #00000099;
    font-size: 16px;
  }
`

export const FooterTooltip = styled('footer')`
  display: flex;
  justify-content: flex-end;

  button {
    padding: 5px 15px;
    color: #2196f3;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
`
