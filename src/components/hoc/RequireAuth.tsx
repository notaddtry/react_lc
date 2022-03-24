import React, { FC } from 'react'
import { Navigate } from 'react-router'

import { useAuth } from '../hooks/auth-hook'

interface PropsRequireAuth {
  children?: React.ReactNode
}

const RequireAuth: FC<PropsRequireAuth> = ({ children }) => {
  const { isAuth } = useAuth()

  if (!isAuth) {
    return <Navigate to='/login' />
  }

  return <>{children}</>
}

export default RequireAuth
