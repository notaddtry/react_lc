import React from 'react'
import { addContact } from '../../store/slices/contactsSlice'
import { useAppDispatch } from '../hooks/redux-hooks'
import { ContactForm } from './ContactForm'

const AddContact = () => {
  const dispatch = useAppDispatch()

  const handleSubmit = (title: string | undefined) => {
    if (title) {
      const newContact = {
        id: Date.now().toString(),
        name: title,
      }
      dispatch(addContact(newContact))
    }
  }
  return (
    <>
      <ContactForm onSubmit={handleSubmit} />
    </>
  )
}

export default AddContact
