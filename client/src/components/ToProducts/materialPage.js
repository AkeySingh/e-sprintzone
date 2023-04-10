import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea, CardActions } from '@mui/material'
import Grid from '@mui/material/Grid'

// const Item = styled()(({}) => ({
// backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// ...theme.typography.body2,
// padding: theme.spacing(1),
// textAlign: 'center',??
// color: theme.palette.text.secondary,
// }))

export default function MultiActionAreaCard({ details }) {
  console.log(details)
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia component='img' height='300' image={details.images[0]} alt='green iguana' />
        <CardContent>
          <Typography
            gutterBottom
            component='div'
            sx={{
              fontSize: 15,
            }}
          >
            {details['title']}
          </Typography>
          <Typography variant='body2'> {details['description']} </Typography>
          <Typography variant='body2'>
            <div
              className='discription_parent'
              sx={{
                fontSize: 15,
              }}
            >
              <div> Rs {details['price']}</div>
              <div className='rating_parent'>
                <span> *****</span>
                <span>3.0</span>
              </div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  )
}
