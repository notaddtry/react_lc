import React, { FC, useState } from 'react'

interface FormProps {
  title: string
  onSubmit: (email: string, password: string) => void
}

const InputForm: FC<FormProps> = ({ title, onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const passHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (
    e: React.MouseEvent,
    email: string | undefined,
    password: string | undefined
  ): void => {
    e.preventDefault()
    if (email && password) {
      onSubmit(email, password)
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div className='row'>
      <form className='col s12'>
        <h1>{title}</h1>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              type='text'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => emailHandleChange(e)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => passHandleChange(e)}
            />
          </div>
        </div>
        <button onClick={(e) => handleSubmit(e, email, password)}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default InputForm
