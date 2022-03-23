import React from 'react'
import { useAuth } from '../components/hooks/auth-hook'
import Register from '../components/User/Register'

const Login = () => {
  const { isAuth } = useAuth()
  console.log(isAuth)

  return (
    <>
      <Register />
    </>
  )
}

export default Login
