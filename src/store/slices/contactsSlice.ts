import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IContact } from '../../components/types/contactType'

const initialState: IContact[] = [
  {
    id: '1',
    name: 'Alise Blackwood',
  },
  {
    id: '2',
    name: 'John Wallsberg',
  },
  {
    id: '3',
    name: 'Soares Kinn',
  },
  {
    id: '4',
    name: 'Albert Einstein',
  },
]

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<IContact>) {
      state = state.splice(0, 0, action.payload)
    },
    editContact(state, action: PayloadAction<IContact>) {
      const { id, name } = action.payload
      const oldUser = state.find((contact) => contact.id === id)
      if (oldUser) {
        oldUser.name = name
      }
    },
    removeContact(state, action: PayloadAction<IContact>) {
      return state.filter((contact) => contact.id !== action.payload.id)
    },
  },
})

export const { addContact, editContact, removeContact } = contactSlice.actions

export default contactSlice.reducer
