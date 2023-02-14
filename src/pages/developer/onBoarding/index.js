// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import { LocalizationProvider } from '@mui/lab'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import PersonalInfo from 'src/views/developerOnboarding/PersonalInfo'
import { Form, Formik } from 'formik'
import { developerValidation } from 'src/@core/utils/formValidation'
import DeveloperExperience from 'src/views/developerOnboarding/DeveloperExperience'
import DeveloperSkills from 'src/views/developerOnboarding/DeveloperSkills'
import DeveloperBankDetails from 'src/views/developerOnboarding/DeveloperBankDetails'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

export default function onBoarding() {
  // ** State
  const [value, setValue] = useState('personalInformation')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='personalInformation'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Personal Information</TabName>
              </Box>
            }
          />
          <Tab
            value='experience'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Experience</TabName>
              </Box>
            }
          />
          <Tab
            value='skills'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Skills</TabName>
              </Box>
            }
          />
          <Tab
            value='bankDetails'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TabName>Bank Details</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='personalInformation'>
          <PersonalInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='experience'>
          <DeveloperExperience />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='skills'>
          <DeveloperSkills />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='bankDetails'>
          <DeveloperBankDetails />
        </TabPanel>
      </TabContext>
    </Card>
  )
}
