import React from 'react'
import { Navigate } from 'react-router'
import ContactsList from '../components/Contacts/ContactsList'
import { useAuth } from '../components/hooks/auth-hook'

const ContactPage = () => {
  const { isAuth } = useAuth()

  return (
    <>
      {isAuth ? (
        <>
          <h1>Contacts</h1>
          <ContactsList />
        </>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  )
}

export default ContactPage
