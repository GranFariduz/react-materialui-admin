import { Link, withRouter } from 'react-router-dom'
import { useForm } from 'react-hook-form'

// ui elements
import Container from '@material-ui/core/Container'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

// components
import { AppButton } from 'components'

// styles
import styles from './styles'

const Login = () => {
  // styles
  const classes = styles()

  // react hook form
  const { register, handleSubmit } = useForm()

  const onLogin = async (): Promise<void> => {
    // ... login code
  }

  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography className={classes.title} component="h1" variant="h5">
          Admin
        </Typography>

        <form onSubmit={handleSubmit(onLogin)} className={classes.form} noValidate>
          <TextField
            {...register('email')}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
          />
          <TextField
            {...register('password')}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
          />

          <Box height={20} />

          <AppButton>Login</AppButton>

          <Box height={20} />

          <Link className={classes.link} to="/forgot-password">
            <Typography align="center" variant="body2">
              Forgot password?
            </Typography>
          </Link>
        </form>
      </div>
    </Container>
  )
}

export default withRouter(Login)
