import GiftCard from '@renderer/views/GiftCard'
import Home from '@renderer/views/Home'
import Layout from '@renderer/views/Layout'
import Login from '@renderer/views/Login'
import Register from '@renderer/views/Register'

const routers = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/giftCard',
        element: <GiftCard />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
]

export default routers
