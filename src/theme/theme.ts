import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#0091FF',
      dark: '#0069B8'
    },
    secondary: {
      main: '#E02076',
      dark: '#B50C58'
    }
  },
  typography: {
    fontFamily: ['Inter', 'Roboto'].join(',')
  }
})
