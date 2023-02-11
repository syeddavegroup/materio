import React from 'react'
import CardContent from '@mui/material/CardContent'

// ** React Imports
import { useState } from 'react'
import { Country, State, City } from 'country-state-city'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import { border, shadows } from '@mui/system'
import { Checkbox, MenuItem } from '@mui/material'
import { ErrorMessage, Form, Formik, useFormik } from 'formik'
import { developerValidation } from 'src/@core/utils/formValidation'
import { useEffect } from 'react'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  },
  background: '#fff',
  border: '1px solid #1D19E3',
  color: '#1D19E3',
  '&:hover': {
    'background-color': '#1D19E3',
    color: '#fff',
    boxShadow: 'none'
  },
  boxShadow: 'none'
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

export default function PersonalInfo() {
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [country, setCountry] = useState([])
  const [state, setState] = useState([])

  // const headers = new Headers()

  // var requestOptions = {
  //   method: 'GET',
  //   headers: headers,
  //   redirect: 'follow'
  // }

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }
  const countries = Country.getAllCountries()

  const updatedCountries = countries.map(country => ({
    label: country.name,
    value: country.flag,
    ...country
  }))

  const updatedStates = countryId =>
    State.getStatesOfCountry(countryId).map(state => ({ label: state.name, value: state.id, ...state }))

  const updatedCities = stateId =>
    City.getCitiesOfState(stateId).map(city => ({ label: city.name, value: city.id, ...city }))

  // country api called
  // useEffect(() => {
  //   const getCountry = async () => {
  //     const res = await fetch('https://api.countrystatecity.in/v1/countries', {
  //       method: 'GET',
  //       headers: headers,
  //       redirect: 'follow'
  //     })
  //     const countryList = await res.json()
  //     setCountry(countryList)
  //   }

  //   getCountry()
  // }, [])

  console.log(country)

  return (
    <Formik
      initialValues={{
        personalInformation: {
          fullName: '',
          email: '',
          mobileNumber: '',
          country: '',
          state: '',
          city: '',
          headline: ''
        },
        generalInformation: {
          firstName: '',
          lastName: '',
          headline: ''
        },
        contactInfo: {
          email: '',
          address: '',
          skypeId: ''
        }
      }}
      validationSchema={developerValidation}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={values => {
        // same shape as initial values
        console.log(values)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, setValues }) => (
        <CardContent>
          <Form>
            <Box>
              <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ImgStyled src={imgSrc} alt='Profile Pic' />
                  <Box>
                    <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                      Upload New Photo
                      <input
                        hidden
                        type='file'
                        onChange={onChange}
                        accept='image/png, image/jpeg'
                        id='account-settings-upload-image'
                      />
                    </ButtonStyled>
                    <ResetButtonStyled
                      color='error'
                      variant='outlined'
                      onClick={() => setImgSrc('/images/avatars/1.png')}
                    >
                      Reset
                    </ResetButtonStyled>
                    <Typography variant='body2' sx={{ marginTop: 5 }}>
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Box>
                <Checkbox /> Open to work
              </Box>
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <TextField
                    id='personalInformation.fullName'
                    name='personalInformation.fullName'
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='First Name'
                    error={
                      touched.personalInformation &&
                      touched.personalInformation.fullName &&
                      Boolean(errors.personalInformation && errors.personalInformation.fullName)
                    }
                    helperText={
                      touched.personalInformation &&
                      touched.personalInformation.fullName &&
                      errors.personalInformation &&
                      errors.personalInformation.fullName
                    }
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    id='personalInformation.email'
                    name='personalInformation.email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.personalInformation &&
                      touched.personalInformation.email &&
                      Boolean(errors.personalInformation && errors.personalInformation.email)
                    }
                    helperText={
                      touched.personalInformation &&
                      touched.personalInformation.email &&
                      errors.personalInformation &&
                      errors.personalInformation.email
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    type='number'
                    id='personalInformation.mobileNumber'
                    name='personalInformation.mobileNumber'
                    label='Mobile'
                    placeholder='99999XXXXXXX'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.personalInformation &&
                      touched.personalInformation.mobileNumber &&
                      Boolean(errors.personalInformation && errors.personalInformation.mobileNumber)
                    }
                    helperText={
                      touched.personalInformation &&
                      touched.personalInformation.mobileNumber &&
                      errors.personalInformation &&
                      errors.personalInformation.mobileNumber
                    }
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id='country'>Country</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='personalInformation.country'
                      name='personalInformation.country'
                      label='Country'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.personalInformation &&
                        touched.personalInformation.country &&
                        Boolean(errors.personalInformation && errors.personalInformation.country)
                      }
                      helperText={
                        touched.personalInformation &&
                        touched.personalInformation.country &&
                        errors.personalInformation &&
                        errors.personalInformation.country
                      }
                    >
                      <MenuItem value={10}>India</MenuItem>
                      <MenuItem value={20}>Germany</MenuItem>
                      <MenuItem value={30}>United State</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id='state'>State</InputLabel>
                    <Select
                      labelId='state'
                      id='personalInformation.state'
                      name='personalInformation.state'
                      label='State'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.personalInformation &&
                        touched.personalInformation.state &&
                        Boolean(errors.personalInformation && errors.personalInformation.state)
                      }
                      helperText={
                        touched.personalInformation &&
                        touched.personalInformation.state &&
                        errors.personalInformation &&
                        errors.personalInformation.state
                      }
                    >
                      <MenuItem value={10}>India</MenuItem>
                      <MenuItem value={20}>Germany</MenuItem>
                      <MenuItem value={30}>United State</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id='city'>City</InputLabel>
                    <Select
                      labelId='city'
                      id='personalInformation.city'
                      name='personalInformation.city'
                      label='City'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.personalInformation &&
                        touched.personalInformation.city &&
                        Boolean(errors.personalInformation && errors.personalInformation.city)
                      }
                      helperText={
                        touched.personalInformation &&
                        touched.personalInformation.city &&
                        errors.personalInformation &&
                        errors.personalInformation.city
                      }
                    >
                      <MenuItem value={10}>India</MenuItem>
                      <MenuItem value={20}>Germany</MenuItem>
                      <MenuItem value={30}>United State</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    fullWidth
                    type='text'
                    id='personalInformation.headline'
                    name='personalInformation.headline'
                    label='Headline'
                    placeholder='Write about yourself'
                  />
                </Grid>
              </Grid>
            </Box>
            <Grid item xs={12} md={12} mt={5}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'right'
                }}
              >
                <Button style={{ backgroundColor: '#03308C' }} type='submit' variant='contained' size='large'>
                  Save Changes
                </Button>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Cancel
                </ResetButtonStyled>
              </Box>
            </Grid>
          </Form>
        </CardContent>
      )}
    </Formik>
  )
}
