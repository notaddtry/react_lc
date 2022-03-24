import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../components/hooks/redux-hooks'

import Undefined from './Undefined'

const ContactSinglePage = () => {
  const { id } = useParams()

  const contact = useAppSelector((state) =>
    state.contacts.find((contact) => contact.id === id)
  )

  return (
    <>
      {contact ? (
        <>
          <Link to='/contacts' className='btn btn-single-page'>
            <i className='material-icons'>arrow_back </i>
          </Link>
          <div className='contact-single-page-wrapper'>
            <h1>{contact.name}</h1>
            <Link
              to={`/contacts/${contact.id}/edit`}
              className='secondary-content bottom-secondary-content'>
              <i className='material-icons icon-avatar'>border_color</i>
            </Link>
          </div>
        </>
      ) : (
        <Undefined />
      )}
    </>
  )
}

export default ContactSinglePage
