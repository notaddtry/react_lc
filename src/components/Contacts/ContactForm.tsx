import React, { FC, useState } from 'react'

interface FormProps {
  title?: string | undefined
  onSubmit: (title: string | undefined) => void
}

export const ContactForm: FC<FormProps> = (props) => {
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
      <form className='col addContact-wrapper'>
        <div className='row addContact-input-wrapper'>
          <div className='input-field'>
            <input
              placeholder='Enter name'
              id='first_name'
              type='text'
              className='validate'
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button
            className='btn waves-effect waves-light'
            onClick={(e) => handleSubmit(e, title)}>
            <i className='material-icons right'>send</i>
            Add Contact
          </button>
        </div>
      </form>
    </div>
  )
}
