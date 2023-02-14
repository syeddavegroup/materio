import React from 'react'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import { Box, Card, TextField, Typography, Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { developerValidation } from 'src/@core/utils/formValidation'

export default function DeveloperSkills() {
  return (
    <Formik
      initialValues={{
        skills: {
          skill: [''],
          language: ['']
        },
        socialProof: [
          {
            linkedIn: '',
            twitter: '',
            instagram: '',
            facebook: ''
          }
        ]
      }}
      validationSchema={developerValidation}
      validateOnChange={true}
      validateOnBlur={true}
      onSubmit={values => {
        // same shape as initial values
        console.log(values)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Card sx={{ margin: '1rem', padding: '1rem' }}>
            <Grid container spacing={5}>
              <FieldArray name='skills.skill'>
                {({ remove, push }) => (
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginY: '1rem' }}
                    >
                      <Typography variant='h4'>Skills</Typography>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        onClick={() => push()}
                      >
                        <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                      </Box>
                    </Box>
                    {values.skills.skill.map((_, index) => (
                      <div key={index}>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: '1rem' }}
                          id='skills'
                          label='skill'
                          name={`skills.skill[${index}]`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].companyName &&
                            Boolean(errors.experience && errors.experience[index].companyName)
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].companyName &&
                            errors.experience &&
                            errors.experience[index].companyName
                          }
                        />
                      </div>
                    ))}
                  </Grid>
                )}
              </FieldArray>
              <FieldArray name='skills.language'>
                {({ remove, push }) => (
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginY: '1rem' }}
                    >
                      <Typography variant='h4'>Language</Typography>
                      <Box
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        onClick={() => push()}
                      >
                        <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                      </Box>
                    </Box>
                    {values.skills.language.map((_, index) => (
                      <div key={index}>
                        <TextField
                          fullWidth
                          sx={{ marginBottom: '1rem' }}
                          id='skills'
                          label='Language'
                          name={`skills.language[${index}]`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].companyName &&
                            Boolean(errors.experience && errors.experience[index].companyName)
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].companyName &&
                            errors.experience &&
                            errors.experience[index].companyName
                          }
                        />
                      </div>
                    ))}
                  </Grid>
                )}
              </FieldArray>
            </Grid>
            <Box
              sx={{
                width: '100%',
                padding: '1rem',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '1rem',
                justifyContent: 'flex-end'
              }}
            >
              <Button sx={{ backgroundColor: '#03308C' }} type='submit' variant='contained'>
                Save
              </Button>
              <Button color='error' variant='outlined' onClick={() => remove(index)}>
                Cancel
              </Button>
            </Box>
          </Card>
          <FieldArray name='socialProof'>
            {({ remove, push }) => (
              <Card sx={{ margin: '1rem', padding: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginY: '1rem' }}>
                  <Typography variant='h4'>Add Experience</Typography>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    onClick={() =>
                      push({
                        linkedIn: '',
                        twitter: '',
                        instagram: '',
                        facebook: ''
                      })
                    }
                  >
                    <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                  </Box>
                </Box>

                {values.socialProof.map((_, index) => (
                  <div className='relative' key={index}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='linkedIn'
                          label='LinkedIn'
                          name={`socialProof[${index}].linkedIn`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.socialProof &&
                            touched.socialProof[index].linkedIn &&
                            Boolean(errors.socialProof && errors.socialProof[index].linkedIn)
                          }
                          helperText={
                            touched.socialProof &&
                            touched.socialProof[index].linkedIn &&
                            errors.socialProof &&
                            errors.socialProof[index].linkedIn
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='twitter'
                          label='Twitter'
                          name={`socialProof[${index}].twitter`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.socialProof &&
                            touched.socialProof[index].twitter &&
                            Boolean(errors.socialProof && errors.socialProof[index].twitter)
                          }
                          helperText={
                            touched.socialProof &&
                            touched.socialProof[index].twitter &&
                            errors.socialProof &&
                            errors.socialProof[index].twitter
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='instagram'
                          label='Instagram'
                          name={`socialProof[${index}].instagram`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.socialProof &&
                            touched.socialProof[index].instagram &&
                            Boolean(errors.socialProof && errors.socialProof[index].instagram)
                          }
                          helperText={
                            touched.socialProof &&
                            touched.socialProof[index].instagram &&
                            errors.socialProof &&
                            errors.socialProof[index].instagram
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='facebook'
                          label='Facebook'
                          name={`socialProof[${index}].facebook`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.socialProof &&
                            touched.socialProof[index].facebook &&
                            Boolean(errors.socialProof && errors.socialProof[index].facebook)
                          }
                          helperText={
                            touched.socialProof &&
                            touched.socialProof[index].facebook &&
                            errors.socialProof &&
                            errors.socialProof[index].facebook
                          }
                        />
                      </Grid>
                    </Grid>
                    <Box
                      sx={{
                        padding: '1rem 0',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '1rem',
                        justifyContent: 'flex-end'
                      }}
                    >
                      <Button sx={{ backgroundColor: '#03308C' }} type='submit' variant='contained'>
                        Save
                      </Button>
                      <Button color='error' variant='outlined' onClick={() => remove(index)}>
                        Cancel
                      </Button>
                    </Box>
                  </div>
                ))}
              </Card>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  )
}
