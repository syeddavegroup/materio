import UserProvider from "./user"

const Context=({children})=>{
return (
  <UserProvider>{children}</UserProvider>
)

}

export default Context
