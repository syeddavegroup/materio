// ** Icon imports

import HomeOutline from 'mdi-material-ui/HomeOutline'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/developer/dashboard'
    },
    {
      title: 'My Community',
      icon: HomeOutline,
      path: '/developer/myCommunity'
    },
    {
      title: 'Messages',
      icon: HomeOutline,
      path: '/developer/messages'
    },
    {
      title: 'My Job',
      icon: HomeOutline,
      path: '/developer/myJob'
    },
    {
      title: 'Support',
      icon: HomeOutline,
      path: '/developer/support'
    },
    {
      title: 'Settings',
      icon: HomeOutline,
      path: '/developer/settings'
    },

    { sectionTitle: 'testing pages' },

    {
      title: 'Log In',
      icon: HomeOutline,
      path: '/auth/logIn',
      openInNewTab: true
    },
    {
      title: 'Sign Up',
      icon: HomeOutline,
      path: '/auth/signUp',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: HomeOutline,
      path: '/auth/error',
      openInNewTab: true
    },
    {
      title: 'Forgot Password',
      icon: HomeOutline,
      path: '/auth/forgotPassword',
      openInNewTab: true
    },
    {
      title: 'Reset Password',
      icon: HomeOutline,
      path: '/auth/resetPassword',
      openInNewTab: true
    }
  ]
}

export default navigation
