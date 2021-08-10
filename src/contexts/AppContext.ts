import React from 'react'

// interfaces
import { IAppContext } from 'types'

export const AppContext: React.Context<IAppContext> =
  React.createContext<IAppContext | null>(null) as React.Context<IAppContext>
