import MainView from '@renderer/components/main/MainView'
import Side from '@renderer/components/side/Side'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/app.scss'

const Layout = () => {
  const navigator = useNavigate()
  useEffect(() => {
    navigator('/home')
  }, [])
  return (
    <>
      <Side />
      <MainView />
    </>
  )
}

export default Layout
