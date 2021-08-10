import axios, { AxiosInstance } from 'axios'

const API_URL: string | undefined = process.env.REACT_APP_API_URL

// creating an axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL + '/api/v1'
})

const token: string = localStorage.getItem('token') as string

// if token present, add it to the auth header
if (token) axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

export default axiosInstance
