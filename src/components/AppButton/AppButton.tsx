import { ExtendButtonBase, ButtonTypeMap } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

// ui elements
import Button from '@material-ui/core/Button'

const AppButton: ExtendButtonBase<ButtonTypeMap<{}, 'button'>> = withStyles({
  root: {
    height: 50,
    borderRadius: 5,
    '& span': {
      fontSize: 15,
      fontWeight: 700
    }
  }
})((props) => (
  <Button
    type="submit"
    fullWidth
    size="large"
    disableElevation
    variant="contained"
    color="primary"
    {...props}
  />
)) as ExtendButtonBase<ButtonTypeMap<{}, 'button'>>

export default AppButton
