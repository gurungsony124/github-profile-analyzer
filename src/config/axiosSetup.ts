import axios from "axios"
export const clientDetails = axios.create({
  baseURL: 'https://api.github.com',
  timeout:5000
})

clientDetails.interceptors.request.use((config ) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
})