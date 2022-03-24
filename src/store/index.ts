import { configureStore } from '@reduxjs/toolkit'

import contactSlice from './slices/contactsSlice'
import userSlice from './slices/userSlice'

const store = configureStore({
  reducer: {
    contacts: contactSlice,
    user: userSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
