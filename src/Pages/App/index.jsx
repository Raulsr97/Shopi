import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home/index'
import { MyAccount } from '../MyAccount/index'
import { MyOrder } from '../MyOrder/index'
import { MyOrders } from '../MyOrders/index'
import { NotFound } from '../NotFound/index'
import { SignIn } from '../SignIn/index'
import { NavBar } from '../../Components/Navbar'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])

  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}


export default App
