import React, { FC } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import InputForm from './InputForm'

import { logInUser } from '../../store/slices/userSlice'
import { useAppDispatch } from '../hooks/redux-hooks'
import { Link, useNavigate } from 'react-router-dom'

const Register: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const title = 'Register'

  const handleSubmit = async (email: string, password: string) => {
    const auth = getAuth()
    const createUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    dispatch(
      logInUser({
        email: createUser.user.email,
        id: createUser.user.uid,
        token: (await createUser.user.getIdTokenResult()).token,
      })
    )
    navigate('/')
  }

  return (
    <>
      <InputForm title={title} onSubmit={handleSubmit} />
      <span>
        Already have an account? <Link to='/login'>Sign In!</Link>
      </span>
    </>
  )
}

export default Register
