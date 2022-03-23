import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IContactAction } from '../../components/types/contactType'

const initialState: IContactAction[] = [
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
    addContact(state, action: PayloadAction<IContactAction>) {
      state.push(action.payload)
    },
    editContact(state, action: PayloadAction<IContactAction>) {
      const { id, name } = action.payload
      const oldUser = state.find((contact) => contact.id === id)
      if (oldUser) {
        oldUser.name = name
      }
    },
    removeContact(state, action: PayloadAction<IContactAction>) {
      return state.filter((contact) => contact.id !== action.payload.id)
    },
  },
})

export const { addContact, editContact, removeContact } = contactSlice.actions

export default contactSlice.reducer
