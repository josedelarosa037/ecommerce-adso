import React, { FC } from 'react';
import NextLink from 'next/link'
import { initialData } from '../../database/products';
import { Grid, Link, CardActionArea, CardMedia, Box, Typography, Button } from '@mui/material';
import { ItemCounter } from '../ui';

const productInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  editable?: boolean
}


export const CartList: FC <Props> = ({ editable = false }) => {
  return (
    <>
    {
      productInCart.map(product => (
        <Grid container spacing={2} key={product.slug} sx={{ mb: 1 }}>
          <Grid item xs={3}>
            <NextLink href='/product/slug' passHref legacyBehavior>
              <Link>
                <CardActionArea>
                  <CardMedia 
                    image={`/products/${product.images[0]}`}
                    component='img'
                    sx={{borderRadius: '5px'}}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display='flex' flexDirection='column'>
              <Typography variant='body1'>{product.title }</Typography>
              <Typography variant='body1'>Talla: <strong>M</strong></Typography>
              {/* TODO: Condicional */}
              {
                editable ? <ItemCounter /> : <Typography variant='h5'>3 productos</Typography>
              }
              
            </Box>
          </Grid>
          <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
            <Typography variant='subtitle1'>{`$${product.price}`}</Typography>
            {
              editable && (
                <Button color='secondary' variant='text'>
                  Eliminar
                </Button>
              )
            }
          </Grid>
        </Grid>
      ))
    }
    </>
  )
}
