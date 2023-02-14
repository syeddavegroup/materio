import React from 'react'
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik'
import { Box, Card, TextField, Typography, Grid, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { developerValidation } from 'src/@core/utils/formValidation'

export default function DeveloperExperience() {
  return (
    <Formik
      initialValues={{
        experience: [
          {
            companyName: '',
            position: '',
            dateOfJoining: '',
            workDescription: '',
            usedSkills: ''
          }
        ],
        projects: [{ title: '', url: '', description: '', duration: '' }],
        licensesAndCertification: [
          {
            name: '',
            issuingOrganization: '',
            issueDate: ''
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
          <FieldArray name='experience'>
            {({ remove, push }) => (
              <Card sx={{ margin: '1rem', padding: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginY: '1rem' }}>
                  <Typography variant='h4'>Add Experience</Typography>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    onClick={() =>
                      push({
                        companyName: '',
                        position: '',
                        dateOfJoining: '',
                        workDescription: '',
                        usedSkills: ''
                      })
                    }
                  >
                    <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                  </Box>
                </Box>

                {values.experience.map((_, index) => (
                  <div className='relative' key={index}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='companyName'
                          label='Company Name'
                          name={`experience[${index}].companyName`}
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
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='position'
                          label='Position'
                          name={`experience[${index}].position`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].position &&
                            Boolean(errors.experience && errors.experience[index].position)
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].position &&
                            errors.experience &&
                            errors.experience[index].position
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='dateOfJoining'
                          name={`experience[${index}].dateOfJoining`}
                          type='date'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].dateOfJoining &&
                            Boolean(errors.experience && errors.experience[index].dateOfJoining)
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].dateOfJoining &&
                            errors.experience &&
                            errors.experience[index].dateOfJoining
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='workDescription'
                          label='Work Experience'
                          name={`experience[${index}].workDescription`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].workDescription &&
                            Boolean(errors.experience && errors.experience[index].workDescription)
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].workDescription &&
                            errors.experience &&
                            errors.experience[index].workDescription
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='usedSkills'
                          label='Used Skills'
                          name={`experience[${index}].usedSkills`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.experience &&
                            touched.experience[index].usedSkills &&
                            Boolean(errors.experience && errors.experience[index].usedSkills)
                          }
                          helperText={
                            touched.experience &&
                            touched.experience[index].usedSkills &&
                            errors.experience &&
                            errors.experience[index].usedSkills
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

          {/* Licenses & Certifications */}

          <FieldArray name='licensesAndCertification'>
            {({ remove, push }) => (
              <Card sx={{ margin: '1rem', padding: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginY: '1rem' }}>
                  <Typography variant='h4'>Licenses & Certifications</Typography>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    onClick={() =>
                      push({
                        companyName: '',
                        position: '',
                        dateOfJoining: '',
                        workDescription: '',
                        usedSkills: ''
                      })
                    }
                  >
                    <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                  </Box>
                </Box>

                {values.licensesAndCertification.map((_, index) => (
                  <div className='relative' key={index}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='certificateName'
                          label='Name *'
                          name={`licensesAndCertification[${index}].name`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.licensesAndCertification &&
                            touched.licensesAndCertification[index].name &&
                            Boolean(errors.licensesAndCertification && errors.licensesAndCertification[index].name)
                          }
                          helperText={
                            touched.licensesAndCertification &&
                            touched.licensesAndCertification[index].name &&
                            errors.licensesAndCertification &&
                            errors.licensesAndCertification[index].name
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='issuingOrganization'
                          name={`licensesAndCertification[${index}].issuingOrganization`}
                          label='Issuing Organisation'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.licensesAndCertification &&
                            touched.licensesAndCertification[index].issuingOrganization &&
                            Boolean(
                              errors.licensesAndCertification &&
                                errors.licensesAndCertification[index].issuingOrganization
                            )
                          }
                          helperText={
                            touched.licensesAndCertification &&
                            touched.licensesAndCertification[index].issuingOrganization &&
                            errors.licensesAndCertification &&
                            errors.licensesAndCertification[index].issuingOrganization
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='issueDate'
                          name={`licensesAndCertification[${index}].issueDate`}
                          type='date'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.licensesAndCertification &&
                            touched.licensesAndCertification[index].issueDate &&
                            Boolean(errors.licensesAndCertification && errors.licensesAndCertification[index].issueDate)
                          }
                          helperText={
                            touched.licensesAndCertification &&
                            touched.licensesAndCertification[index].issueDate &&
                            errors.licensesAndCertification &&
                            errors.licensesAndCertification[index].issueDate
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='workDescription'
                          label='Expiry Date'
                          name={`experience[${index}].workDescription`}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='usedSkills'
                          label='Credential URL'
                          name={`experience[${index}].usedSkills`}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='usedSkills'
                          label='Credential ID'
                          name={`experience[${index}].usedSkills`}
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
                      <Button color='error' variant='outlined'>
                        Cancel
                      </Button>
                    </Box>
                  </div>
                ))}
              </Card>
            )}
          </FieldArray>

          {/* Project Details */}

          <FieldArray name='projects'>
            {({ remove, push }) => (
              <Card sx={{ margin: '1rem', padding: '1rem' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginY: '1rem' }}>
                  <Typography variant='h4'>Project Details</Typography>
                  <Box
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    onClick={() =>
                      push({
                        companyName: '',
                        position: '',
                        dateOfJoining: '',
                        workDescription: '',
                        usedSkills: ''
                      })
                    }
                  >
                    <AddIcon /> <Typography color={'#03308C'}>Add</Typography>
                  </Box>
                </Box>

                {values.projects.map((_, index) => (
                  <div className='relative' key={index}>
                    <Grid container spacing={5}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='companyName'
                          label='Project name'
                          name={`experience[${index}].companyName`}
                          type='text'
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField fullWidth id='position' label='Project URL' name={`experience[${index}].position`} />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='dateOfJoining'
                          name={`experience[${index}].dateOfJoining`}
                          type='date'
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='dateOfJoining'
                          name={`experience[${index}].dateOfJoining`}
                          type='date'
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <TextField
                          fullWidth
                          id='workDescription'
                          label='Description'
                          name={`experience[${index}].workDescription`}
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
                      <Button color='error' variant='outlined'>
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
