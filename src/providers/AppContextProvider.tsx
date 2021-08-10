import React, { useState, useContext, useCallback, useMemo } from 'react'

// context
import { AppContext } from 'contexts/AppContext'

// types
import { IAppContext, IUser, IAlert } from 'types'

type PropTypes = {
  children: React.ReactNode
}

const AppContextProvider = (props: PropTypes) => {
  // initial states
  const initialUserState: IUser = useMemo(
    () => ({
      _id: '',
      email: '',
      name: '',
      surname: ''
    }),
    []
  )

  const initialAlertState: IAlert = useMemo(
    () => ({
      open: false,
      message: '',
      color: 'success'
    }),
    []
  )

  // states
  const [user, setUser] = useState<IUser>({ ...initialUserState })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  const [alert, setAlert] = useState<IAlert>({ ...initialAlertState })

  // resetters
  const resetUser = useCallback(
    (): void => setUser({ ...initialUserState }),
    [initialUserState]
  )
  const resetAlert = useCallback(
    (): void => setAlert({ ...initialAlertState }),
    [initialAlertState]
  )

  return (
    <AppContext.Provider
      value={{
        user,
        isLoading,
        alert,
        isSidebarOpen,

        setUser,
        setIsLoading,
        setAlert,
        setIsSidebarOpen,

        resetUser,
        resetAlert
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export const useApp = (): IAppContext => useContext<IAppContext>(AppContext)

export default AppContextProvider
