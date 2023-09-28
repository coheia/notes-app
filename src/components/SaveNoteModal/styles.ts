import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrapper = styled('div')``

const paddingContainer = 34
const xPaddingTitle = 34

export const ModalContainer = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 4px;
  box-shadow: 24px;
  width: 80%;
  height: 90vh;
  max-width: 824px;
  max-height: 458px;
  padding: ${paddingContainer}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ModalHeader = styled('header')`
  display: block;
  padding: 20px ${xPaddingTitle}px 17px;
  border-bottom: 0.01em solid #00000080;
  width: calc(100% + ${paddingContainer * 2}px - ${xPaddingTitle * 2}px);
  margin: -${paddingContainer}px 0 0 -${paddingContainer}px;

  .title {
    font-size: 24px;
    letter-spacing: 0px;
    color: #00000080;
  }
`

export const ModalFooter = styled('footer')`
  display: flex;
  padding: 24px 0 0 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  gap: 24px;
  justify-content: flex-end;

  button {
    padding: 5px 15px;
    color: #2196f3;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
`

export const Left = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: calc(70% - 17px);
`
export const Right = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 30%;
`

export const ModalBody = styled('div')``

export const InputNote = styled('form')`
  display: flex;
  gap: 17px;
  margin-top: 20px;

  .text-field {
    input,
    textarea,
    em {
      color: #00000099;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;

      div:has(input:focus) {
        outline: 1px solid;
      }
    }

    .MuiInputBase-root,
    &.MuiSelect-select {
      background-color: #f4f4f4;
      /* border: 0; */
    }
  }
  .MuiOutlinedInput-notchedOutline {
    /* border: 0; */
  }
`
