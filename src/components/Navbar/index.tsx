import { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

// ui elements
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

// icons
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import AccountCircle from '@material-ui/icons/AccountCircle'
import GroupIcon from '@material-ui/icons/Group'

// global state
import { useApp } from 'providers/AppContextProvider'

// styles
import styles from './styles'

const Navbar = () => {
  // styles
  const classes = styles()

  // global state
  const { isSidebarOpen, setIsSidebarOpen } = useApp()

  // local state
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // for toggling drawer
  const handleDrawer = () => setIsSidebarOpen((currState: boolean) => !currState)

  // for toggling menu
  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget)
  const handleMenuClose = (): void => setAnchorEl(null)

  const onLogout = (): void => {
    // closing menu
    handleMenuClose()

    // ... logout code
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isSidebarOpen
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: isSidebarOpen
            })}
          >
            <MenuIcon />
          </IconButton>

          <Box flexGrow={1}>
            <Link className={classes.appBarTitleLink} to="/">
              <Box display="flex" alignItems="center">
                <img
                  src={'https://img.icons8.com/ffffff/book-filled'}
                  width={30}
                  alt="Admin Logo"
                />
                <Box width={10} />
                <Typography className={classes.appBarTitle} variant="h6" noWrap>
                  admin
                </Typography>
              </Box>
            </Link>
          </Box>

          <div className={classes.sectionDesktop}>
            <IconButton edge="end" onClick={handleMenuOpen} color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isSidebarOpen,
          [classes.drawerClose]: !isSidebarOpen
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isSidebarOpen,
            [classes.drawerClose]: !isSidebarOpen
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawer}>{<ChevronLeftIcon />}</IconButton>
        </div>

        <Divider />

        <List>
          <Link className={classes.listItem} to="/">
            <ListItem button>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary={'Users'} />
            </ListItem>
          </Link>
        </List>
      </Drawer>

      {/* USER MENU */}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default Navbar
