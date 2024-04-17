import { useAuth } from '@renderer/store/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const isLogin = useAuth((state) => state.isLogin)
  const setLogin = useAuth((state) => state.setLogin)
  const navigator = useNavigate()
  useEffect(() => {
    window.api.setLoginWindow()
    setTimeout(() => {
      setLogin(true)
      if (isLogin) {
        navigator('/home')
      }
    }, 1000)
  }, [])
  return (
    <>
      <div className="login-container">
        <input type="text" />
        <input type="text" />
        <button>Login</button>
        <button>register</button>
      </div>
    </>
  )
}

export default Login
