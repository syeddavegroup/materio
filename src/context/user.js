import { createContext,useEffect,useState } from "react"
import axiosInstance from "src/axios"
import {useRouter} from 'next/router'

export const UserContext= createContext()


const UserProvider=({children})=>{
const router=useRouter()
  const [user,setuser]=useState(null)

  const register=(data)=>{
    axiosInstance({
      method: "POST",
      url:'/api/auth/local/register',
      data
    }).then((res)=>{

      localStorage.setItem('DCOM',res?.data?.jwt)
      setuser(res?.data?.user);

    })
  }

  const login=(data)=>{
    axiosInstance({
      method: "POST",
      url:'/api/auth/local',
      data
    }).then((response)=>{
      console.log(response.data)
      localStorage.setItem('DCOM',response?.data?.jwt)
      setuser(response?.data?.user);
      router.push('/')
    })
  }

  const getuser=()=>{
   const token= localStorage.getItem('DCOM')
   if(token){
    axiosInstance({
      method: "GET",
      url:'/api/users/me',
    }).then((res)=>{
      setuser(res.data)
      router.push('/')
    })
   }
  }

  useEffect(()=>{
    getuser()
  },[])

  return <UserContext.Provider value={{user,register,login}}>
          {children}
  </UserContext.Provider>
}

export default UserProvider
