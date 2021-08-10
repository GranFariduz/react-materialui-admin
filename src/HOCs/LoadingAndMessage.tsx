import React, { useEffect, useMemo } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core'
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

// axios instance
import axios from 'config/axios'

// ui elements
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

// global state
import { useApp } from 'providers/AppContextProvider'

// types
import { IInterceptors } from 'types'

type PropTypes = {
  children: React.ReactNode
}

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1
    }
  })
)

const LoadingAndMessage = (props: PropTypes) => {
  // styles
  const classes = useStyles()

  // global state
  const { alert, isLoading, setAlert, setIsLoading } = useApp()

  const interceptorFunctions = (): IInterceptors => {
    return {
      request: (request: AxiosRequestConfig): AxiosRequestConfig => {
        setIsLoading(true)
        return request
      },

      response: (response: AxiosResponse): AxiosResponse => {
        setIsLoading(false)

        // displaying success or error messages
        if (response.data.success && response.data.message) {
          setAlert({
            open: true,
            message: response.data.message,
            color: 'success'
          })
        }

        if (!response.data.success && response.data.message) {
          setAlert({
            open: true,
            message: response.data.message,
            color: 'error'
          })
        }

        return response
      },

      error: (err: AxiosError) => {
        let message: string = ''

        switch (err.response?.status) {
          case 200:
            message = ''
            break
          case 400:
            message = 'Bad Request'
            break
          case 401:
            message = 'Unauthorized'
            break
          case 403:
            message = 'Access forbidden'
            break
          case 404:
            message = 'Not found'
            break
          case 500:
            message = 'Internal server error'
            break
          case 502:
            message = 'Bad gateway'
            break
          case 503:
            message = 'Database error'
            break
          default:
            message = 'Unable to connect to the server'
            break
        }

        setIsLoading(false)

        if (message) {
          setAlert({
            open: true,
            message: err.response?.data.message || message,
            color: 'error'
          })
        }

        return err
      }
    }
  }

  // creating interceptors
  const interceptors: IInterceptors = useMemo(interceptorFunctions, [
    setAlert,
    setIsLoading
  ])

  useEffect(() => {
    // global request interceptor - to start the loader
    const requestInterceptorID: number = axios.interceptors.request.use(
      interceptors.request
    )

    // global response interceptor - to stop loader and display any messages
    const responseInterceptorID: number = axios.interceptors.response.use(
      interceptors.response,
      interceptors.error
    )

    return () => {
      // ejecting interceptors
      axios.interceptors.request.eject(requestInterceptorID)
      axios.interceptors.response.eject(responseInterceptorID)
    }
  }, [interceptors.request, interceptors.response, interceptors.error])

  // for closing alert
  const closeAlert = () => setAlert({ ...alert, open: false })

  return (
    <>
      {props.children}

      {/* loading backdrop */}
      <Backdrop className={classes.backdrop} open={isLoading}>
        <CircularProgress color="primary" />
      </Backdrop>

      {/* to show alert messages */}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={alert.open}
        autoHideDuration={3000}
        onClose={closeAlert}
      >
        <Alert variant="filled" onClose={closeAlert} severity={alert.color}>
          {alert.message}
        </Alert>
      </Snackbar>
    </>
  )
}

export default LoadingAndMessage
