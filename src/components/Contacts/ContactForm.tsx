import React, { FC, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useAppSelector } from '../hooks/redux-hooks'

interface FormProps {
  title?: string | undefined
  onSubmit: (title: string | undefined) => void
}

export const ContactForm: FC<FormProps> = (props) => {
  const navigate = useNavigate()
  const [title, setTitle] = useState(props.title || '')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(event.target.value)
  }

  const handleSubmit = (
    e: React.MouseEvent,
    title: string | undefined
  ): void => {
    e.preventDefault()
    props.onSubmit(title)
    setTitle('')
  }

  return (
    <div className='row'>
      <form className='col s12'>
        <div className='row'>
          <div className='input-field col s6'>
            <input
              placeholder='Enter name'
              id='first_name'
              type='text'
              className='validate'
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button onClick={(e) => handleSubmit(e, title)}>Submit</button>
      </form>
    </div>
  )
}
