// global state
import { useApp } from 'providers/AppContextProvider'

interface IProps {
  children: React.ReactNode
}

const Layout = (props: IProps) => {
  // global state
  const { isSidebarOpen } = useApp()

  const styles = {
    root: {
      padding: `90px 30px 90px ${isSidebarOpen ? '270px' : '90px'}`,
      transitionDuration: '0.25s'
    }
  }

  return <div style={styles.root}>{props.children}</div>
}

export default Layout
