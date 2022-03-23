import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './slices/contactsSlice'
import userSlice from './slices/userSlice'

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    user: userSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
