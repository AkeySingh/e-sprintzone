import { styled } from '@mui/material/styles'
import { bgPink, colorPink } from '../global-variable'

export const Box = styled('div')(({ theme }) => ({
  position: 'static',
  bottom: '0px',
  width: '100%',
  height: '300px',
  padding: '20px 0px',
  textAlign: 'start',
  color: colorPink,
  background: bgPink,
}))
