import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ContactsPage from './pages/ContactsPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Undefined from './pages/Undefined'

import HomeLayout from './components/layout/HomeLayout'
import ContactSinglePage from './components/Contacts/ContactSinglePage'
import EditContact from './components/Contacts/EditContact'
import ContactsLayout from './components/layout/ContactsLayout'
import ContactPage from './pages/ContactsPage'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <div className='App wrapper'>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path='contacts' element={<ContactsLayout />}>
            <Route index element={<ContactPage />} />
            <Route path=':id' element={<ContactSinglePage />} />
            <Route path=':id/edit' element={<EditContact />} />
          </Route>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='*' element={<Undefined />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
