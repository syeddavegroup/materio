import axios from 'axios';


// ----------------------------------------------------------------------
const baseurl = "http://localhost:1337";

//const baseurl = "https://1337-nkseth-nelashbacked-daepcspmv7w.ws-us77.gitpod.io/"
//const baseurl= "https://squid-app-z3ql5.ondigitalocean.app/"

// const axiosInstance = axios.create();
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
// );

const axiosInstance=axios.create({
    baseURL:baseurl,
})
axiosInstance.interceptors.request.use(async(config)=>{
     let token=localStorage.getItem("DCOM");

         if(token && !config.url.includes('auth')){

                config.headers.authorization= `Bearer ${token}`;
            }








return config

})

axiosInstance.interceptors.response.use(async(config)=>{


return config

},(error)=>{
//     console.log(error?.request?.config?.url,error.response)
//     if(error?.response?.config?.url==="/auth/send-email-confirmation" || error?.response?.config?.url==="/auth/forgot-password"){

//         if(error.response?.status===500){
//             toast.error("User account doesn’t exist, please create an account", {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 theme:'colored',
//                 progress: undefined,
//                 });


//     }
// }
//     sl(false)
//     if(error.response?.status!==500){
//     if(error.response.data.data?.[0].messages.length>0 ){
//         error.response.data.data?.[0].messages.map((i)=>{
//             toast.error(i.message, {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 theme:'colored',
//                 progress: undefined,
//                 });
//         })
//     }
//     else {

// toast.error( (error?.response?.data?.message ||"Something Went Wrong"), {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme:'colored',
//         progress: undefined,
//         });
//         console.log(error.response  || "Something Went Wrong")
//     }
//     }
//     if( error.response?.status===401){
//         localStorage.removeItem('fis-token');
//         gotohome?.push('/')
//         setuser({})
//     }
})




export default axiosInstance;


