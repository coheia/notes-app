import styled from '@emotion/styled'

export const ProgressBarWrapper = styled('div')`
  width: 100%;
  height: 4px;
  border-radius: 5px;
  background-color: #2196f324;
  display: flex;
  justify-content: start;
  align-items: center;
`

export const ProgressBarBar = styled('div')`
  width: 100%;
  height: 100%;
  background-color: #2196f3;
  transition: all 0.3s;
`

export const ProgressBarLabel = styled('div')`
  font-size: 18px;
  color: #00000099;
  font-weight: 600;
`

export const Wrapper = styled('div')`
  width: 100%;
  grid-area: p;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 25px;
`
