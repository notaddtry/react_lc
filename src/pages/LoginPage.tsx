import React from 'react'
import { useAuth } from '../components/hooks/auth-hook'
import LogIn from '../components/User/LogIn'

const Login = () => {
  const { isAuth } = useAuth()

  return (
    <>
      <LogIn />
    </>
  )
}

export default Login
