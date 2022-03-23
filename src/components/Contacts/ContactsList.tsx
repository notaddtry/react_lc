import React, { FC, MouseEventHandler } from 'react'

import { Link } from 'react-router-dom'
import { removeContact } from '../../store/slices/contactsSlice'
import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks'
import { IContactAction } from '../types/contactType'
import AddContact from './AddContact'

const ContactsList: FC = () => {
  const contacts = useAppSelector((state) => state.contacts)
  const dispatch = useAppDispatch()

  const deleteContact = (contact: IContactAction) => {
    dispatch(removeContact(contact))
  }

  return (
    <>
      <AddContact />
      <ul className='collection'>
        {contacts.map((contact) => (
          <li key={contact.id} className='collection-item avatar'>
            <Link to={`/contacts/${contact.id}`} className='material-icons'>
              <i className='material-icons icon-avatar'>account_circle</i>
            </Link>
            <span className='title'>{contact.name}</span>
            <button
              className='secondary-content delete'
              onClick={() => deleteContact(contact)}>
              <i className='material-icons'>clear</i>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ContactsList
