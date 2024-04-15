import { Outlet } from 'react-router-dom'
import './mianview.scss'
const MainView = () => {
  return (
    <div className="main-content">
      <div className="content-header">
        <div className="progress"></div>
      </div>
      <div className="content-body">
        <div className="outlet-container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainView
