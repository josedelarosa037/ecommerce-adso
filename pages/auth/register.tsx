
import NextLink from 'next/link'
import { Box, Button, Grid, TextField, Typography, Link } from '@mui/material'
import { AuthLayout } from "../../components/layouts"
import React, { useState } from 'react'
import axios from 'axios'

const RegisterPage = () => {
  const [fullname, setFullname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [error, setError] = useState<string>()


  const onSubmit = () => {
    setError(undefined)

    // validate
    if (fullname == "") {
      return setError("Nombre obligatorio")
    }
    if (email == "") {
      return setError("Email obligatorio")
    }
    if (password == "") {
      return setError("Contraseña obligatorio")
    }

    axios.post(
      "http://localhost:3000/api/users/register",
      {fullname, email, password}
    ).then(res => {
      console.log("response", res)
    }).catch(err => {
      console.error("error on register", err)
    })
  } 

  return (
    <AuthLayout title={"Ingresar"}>
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h1' component='h1'>Crear Cuenta</Typography>
          </Grid>

          {error && (
            <Typography color="red">{error}</Typography>
          )}

          <Grid item xs={12}>
            <TextField onChange={(e) => setFullname(e.target.value)} value={fullname} label='Nombre completo' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={(e) => setEmail(e.target.value)} value={email} label='Correo' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={(e) => setPassword(e.target.value)} value={password} label='Contraseña' type='password' variant='filled' fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={onSubmit} color='secondary' className='circular-btn' size='large' fullWidth>
              INGRESAR
            </Button>
          </Grid>
          <Grid item xs={12} display='flex' justifyContent='center'>
            <NextLink href='/auth/login' passHref legacyBehavior>
              <Link underline='always'>
              ¿Ya tienes una cuenta?
              </Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  )
}

export default RegisterPage