import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../components/types/userType'

const initialState: IUser = {
  id: null,
  email: null,
  token: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logInUser(state: IUser, action: PayloadAction<IUser>) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.token = action.payload.token
    },
    logOutUser(state: IUser) {
      state.email = null
      state.id = null
      state.token = null
    },
  },
})

export const { logInUser, logOutUser } = userSlice.actions

export default userSlice.reducer
