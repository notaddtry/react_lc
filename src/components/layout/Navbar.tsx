import React from 'react'
import { Link } from 'react-router-dom'
import { logOutUser } from '../../store/slices/userSlice'
import { useAuth } from '../hooks/auth-hook'
import { useAppDispatch } from '../hooks/redux-hooks'

const Navbar = () => {
  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()

  const logOutHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    dispatch(logOutUser())
  }

  const logHandler = () => {
    return (
      <>
        {isAuth ? (
          <button onClick={(e) => logOutHandler(e)}>Log out</button>
        ) : (
          <Link to='/login'>Log in</Link>
        )}
      </>
    )
  }

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo left'>
          Logo
        </Link>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>{logHandler()}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
