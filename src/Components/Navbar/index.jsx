import { NavLink } from "react-router-dom"
import '../../Pages/App/App.css'
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const NavBar = () => {
  const { count } = useContext(ShoppingCartContext)
  const style = 'underline underline-offset-4'

  return(
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink 
            to='/'
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink 
              to='/'
              className={({ isActive }) => isActive ? style : undefined}
            >
            All
          </NavLink>
        </li>
        <li>
          <NavLink 
              to='/electronics'
              className={({ isActive }) => isActive ? style : undefined}
            >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink 
              to='/furnitures'
              className={({ isActive }) => isActive ? style : undefined}
            >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink 
              to='/clothes'
              className={({ isActive }) => isActive ? style : undefined}
            >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink 
              to='/toys'
              className={({ isActive }) => isActive ? style : undefined}
            >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink 
              to='/others'
              className={({ isActive }) => isActive ? style : undefined}
            >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 ">
        <li className="text-black/60">
          salinasraul883@gmail.com
        </li>
        <li>
          <NavLink 
              to='/my-orders'
              className={({ isActive }) => isActive ? style : undefined}
            >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink 
              to='/my-account'
              className={({ isActive }) => isActive ? style : undefined}
            >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink 
              to='/sign-in'
              className={({ isActive }) => isActive ? style : undefined}
            >
            Sign In
          </NavLink>
        </li>
        <li>
          🛍️ {count}
        </li>
      </ul>
    </nav>
  )
} 

export { NavBar }