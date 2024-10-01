import './App.css'
import { Home } from '../Home/index'
import { MyAccount } from '../MyAccount/index'
import { MyOrder } from '../MyOrder/index'
import { MyOrders } from '../MyOrders/index'
import { NotFound } from '../NotFound/index'
import { SignIn } from '../SignIn/index'



function App() {
  return (
    <>
      <Home />
      <MyAccount />
      <MyOrder />
      <MyOrders />
      <NotFound />
      <SignIn />
    </>
  )
}

export default App
