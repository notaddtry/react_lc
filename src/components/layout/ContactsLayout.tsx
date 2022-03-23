import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

const ContactsLayout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default ContactsLayout
