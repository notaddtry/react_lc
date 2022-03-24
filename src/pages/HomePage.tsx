import React from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch } from '../components/hooks/redux-hooks'
import { logOutUser } from '../store/slices/userSlice'

const HomePage = () => {
  const dispatch = useAppDispatch()

  const logOutHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    dispatch(logOutUser())
  }

  return (
    <div className='homepage-wrapper'>
      <h1>Home page</h1>
      <Link to='/contacts' className='btn'>
        {' '}
        See contacts
      </Link>
      <button className='btn' onClick={(e) => logOutHandler(e)}>
        Log Out from account
      </button>
    </div>
  )
}

export default HomePage
