import Link from 'next/link'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

import AuthHelper from 'src/helper/AuthHelper'

const Dashboard = () => {
  return (
    // <AuthHelper>
    <ApexChartWrapper>
      <div>
        <button>
          <Link href='/auth/logIn'>Log In</Link>
        </button>
        <button>
          <Link href='/auth/signUp'>Sign Up</Link>
        </button>
      </div>
    </ApexChartWrapper>
    // </AuthHelper>
  )
}

export default Dashboard
