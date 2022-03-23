import React, { FC } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { useAppDispatch } from '../hooks/redux-hooks'
import { logInUser } from '../../store/slices/userSlice'

import InputForm from './InputForm'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth-hook'

const LogIn: FC = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  const title = 'Login'

  const handleSubmit = async (email: string, password: string) => {
    const auth = getAuth()
    const getUser = await signInWithEmailAndPassword(auth, email, password)

    dispatch(
      logInUser({
        email: getUser.user.email,
        id: getUser.user.uid,
        token: (await getUser.user.getIdTokenResult()).token,
      })
    )
    navigate('/')
  }

  return (
    <>
      <InputForm title={title} onSubmit={handleSubmit} />
      <span>
        Do not have account? <Link to='/register'>Sign Up!</Link>{' '}
      </span>
    </>
  )
}

export default LogIn
