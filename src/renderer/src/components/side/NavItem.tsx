import { useNavigate } from 'react-router-dom'
import './nav.scss'

const NavItem = ({ icon, path, isActive, onClick }) => {
  const navigator = useNavigate()
  return (
    <div
      className={`nav-item__container  ${isActive ? 'active' : ''} no-drag`}
      onClick={() => {
        onClick(path) // * 回调父组件
        navigator(path)
      }}
    >
      <div className="nav-item__icon">{icon}</div>
    </div>
  )
}

export default NavItem
