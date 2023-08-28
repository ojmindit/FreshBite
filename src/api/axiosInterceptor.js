import axios from 'axios'

axios.defaults.baseURL = 'https://fakestoreapi.com/products'

axios.interceptors.request.use( config => {
//   config.headers["Authorization"] = `Bearer ${localStorage.getItem("Token")}`;
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";
  return config
})

axios.interceptors.response.use(response=>{
  console.log(response)
  console.log("axios Interceptor working fine")
  return response
})