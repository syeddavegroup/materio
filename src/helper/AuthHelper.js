const {  useRouter } = require("next/router")
const { useContext, useEffect, useState } = require("react")
const { UserContext } = require("src/context/user")

const AuthHelper=({children})=>{
  const {user}=useContext(UserContext)
  const [pathname,setpathname]=useState("/")
  const router= useRouter()
  useEffect(()=>{
    setpathname(router.pathname)
    if(!user) router.push('/pages/login')
   else  router.push('/')
  },[user])

return <>{ children}</>
}

export default AuthHelper
