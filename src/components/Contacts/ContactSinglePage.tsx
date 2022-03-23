import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux-hooks'

import Undefined from '../../pages/Undefined'

const ContactSinglePage = () => {
  const { id } = useParams()

  const contact = useAppSelector((state) =>
    state.contacts.find((contact) => contact.id === id)
  )

  return (
    <div>
      {contact ? (
        <>
          <Link to='/contacts'>
            <i className='material-icons'>arrow_back </i>
          </Link>
          <h1>{contact.name}</h1>
          <Link
            to={`/contacts/${contact.id}/edit`}
            className='secondary-content bottom-secondary-content'>
            <i className='material-icons icon-avatar'>border_color</i>
          </Link>
        </>
      ) : (
        <Undefined />
      )}
    </div>
  )
}

export default ContactSinglePage
