import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

// styles
import './index.css'

// contexts
import AppContextProvider from './providers/AppContextProvider'

// main app
import App from './App'

import reportWebVitals from './reportWebVitals'

const Root = () => (
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
