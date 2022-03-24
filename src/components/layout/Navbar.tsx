import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../hooks/auth-hook'
import { useAppDispatch } from '../hooks/redux-hooks'

import { logOutUser } from '../../store/slices/userSlice'

const Navbar: FC = () => {
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
          <button className='btn_nav' onClick={(e) => logOutHandler(e)}>
            Log out
          </button>
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
          <li className='btn_nav-wrapper'>{logHandler()}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
