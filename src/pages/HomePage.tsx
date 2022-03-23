import React from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../components/hooks/auth-hook'
import { useAppDispatch } from '../components/hooks/redux-hooks'
import { logOutUser } from '../store/slices/userSlice'

const HomePage = () => {
  const { isAuth } = useAuth()
  const dispatch = useAppDispatch()

  const logOutHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    dispatch(logOutUser())
  }

  return (
    <>
      {isAuth ? (
        <>
          <h1>Home page</h1>
          <button className='btn' onClick={(e) => logOutHandler(e)}>
            Log Out from account
          </button>
        </>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  )
}

export default HomePage
