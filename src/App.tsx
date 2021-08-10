import { Switch, Route, withRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// theme
import theme from 'theme/theme'

// views
import { Home, Login } from 'views'

// HOCs
import LoadingAndMessage from 'HOCs/LoadingAndMessage'

// components
import { Navbar } from 'components'

// types
import { IRouteProps } from 'types'

type PropTypes = IRouteProps<{}>

function App(props: PropTypes) {
  return (
    <ThemeProvider theme={theme}>
      <LoadingAndMessage>
        <CssBaseline />
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          {/* AUTH */}
          <Route path="/login" component={Login} />
        </Switch>
      </LoadingAndMessage>
    </ThemeProvider>
  )
}

export default withRouter(App)
