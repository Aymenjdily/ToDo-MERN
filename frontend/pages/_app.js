import '../styles/globals.css'
import { TaskContextProvider } from '../context/taskContext'

function MyApp({ Component, pageProps }) {
  return (
    <TaskContextProvider>
      <Component {...pageProps} />
    </TaskContextProvider>
  )
}

export default MyApp
