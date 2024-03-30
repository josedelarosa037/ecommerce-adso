import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>3 Productos</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${207000}`}</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>IVA (19%) </Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{`$${39330}`}</Typography>
      </Grid>

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant='subtitle1'>Total:</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt:2 }} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{`$${246300}`}</Typography>
      </Grid>
    </Grid>
  )
}
