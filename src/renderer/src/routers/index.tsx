import GiftCard from '@renderer/views/GiftCard'
import Home from '@renderer/views/Home'
import Layout from '@renderer/views/Layout'

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
  }
]

export default routers
