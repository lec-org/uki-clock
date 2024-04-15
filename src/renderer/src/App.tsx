import { useRoutes } from 'react-router-dom'
import routes from './routers'
function App(): JSX.Element {
  const Routers = useRoutes(routes)
  return <>{Routers}</>
}

export default App
