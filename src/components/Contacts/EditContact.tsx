import React, { FC } from 'react'
import { useNavigate, useParams } from 'react-router'

import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks'

import { editContact } from '../../store/slices/contactsSlice'
import { ContactForm } from './ContactForm'

const EditContact: FC = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const contact = useAppSelector((state) =>
    state.contacts.find((contact) => contact.id === id)
  )

  const handleSubmit = (title: string | undefined) => {
    if (title && contact) {
      const updatedContact = {
        id: contact.id,
        name: title,
      }
      dispatch(editContact(updatedContact))
    }
    navigate(-1)
  }

  return (
    <>
      <ContactForm title={contact?.name} onSubmit={handleSubmit} />
    </>
  )
}

export default EditContact
