import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const Item = styled(Button)`
  padding: 8px 35px;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  i {
    border-radius: 100%;
    transition: all 0.3s;
    width: 0px;
    height: 0px;
    display: block;
  }

  &.MuiButton-text {
    color: #00000099;
    display: flex;
    flex-direction: column;

    i {
      width: 6px;
      height: 6px;
    }
  }
`
