import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import { Color } from '@material-ui/lab/Alert'

// * ROUTE PROPS * //
export type IRouteProps<T> = RouteComponentProps<T>

// * API RESPONSE * //
export interface IAPIResponse {
  success: boolean
  data: any
  message: string
}

export interface IInterceptors {
  request: (request: AxiosRequestConfig) => AxiosRequestConfig
  response: (response: AxiosResponse) => AxiosResponse
  error: (err: AxiosError) => AxiosError<any>
}

export type IResponse = AxiosResponse<IAPIResponse>

// * GLOBAL STATE * //

// USER
export interface IUser {
  _id: string
  name: string
  surname: string
  email: string
}

export interface IAlert {
  open: boolean
  message: string
  color: Color
}

type SetState<T> = React.Dispatch<React.SetStateAction<T>>

export interface IAppContext {
  isLoading: boolean
  isSidebarOpen: boolean
  alert: IAlert
  user: IUser

  setIsLoading: SetState<boolean>
  setIsSidebarOpen: SetState<boolean>
  setAlert: SetState<IAlert>
  setUser: SetState<IUser>

  resetUser: () => void
  resetAlert: () => void
}

// ======== PAGES ========= //
// ======================== //

// page specific interfaces / types ....
