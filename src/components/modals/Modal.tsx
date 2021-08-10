// ui elements
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

type PropTypes = {}

const Modal = (props: PropTypes) => {
  const onSubmit = () => {
    // submit handler...
  }

  return (
    <Dialog fullWidth open={false} onClose={() => console.log('OnClose fired')}>
      <DialogTitle>Modal</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter the name of anything</DialogContentText>

        <form onSubmit={onSubmit} noValidate>
          <TextField
            variant="outlined"
            required
            margin="normal"
            label="Name of anything..."
            fullWidth
            autoComplete="off"
          />

          <Box height={20} />

          <Button
            fullWidth
            type="submit"
            size="large"
            variant="contained"
            disableElevation
            color="primary"
          >
            submit
          </Button>

          <Box height={10} />
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
