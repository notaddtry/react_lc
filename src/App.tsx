import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import ContactsPage from './pages/ContactsPage'
import LoginPage from './pages/LoginPage'
import Undefined from './pages/Undefined'
import ContactSinglePage from './pages/ContactSinglePage'
import RegisterPage from './pages/RegisterPage'

import HomeLayout from './components/layout/HomeLayout'
import EditContact from './components/Contacts/EditContact'
import ContactsLayout from './components/layout/ContactsLayout'

import RequireAuth from './components/hoc/RequireAuth'

const HomePage = React.lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <div className='App wrapper'>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route
            index
            element={
              <RequireAuth>
                <Suspense fallback={<p>loading...</p>}>
                  <HomePage />
                </Suspense>
              </RequireAuth>
            }
          />
          <Route
            path='contacts'
            element={
              <RequireAuth>
                <ContactsLayout />
              </RequireAuth>
            }>
            <Route index element={<ContactsPage />} />
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
