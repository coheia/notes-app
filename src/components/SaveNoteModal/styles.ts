import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrapper = styled('div')``
export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 24px;
  padding: 4px;
`
