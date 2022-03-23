import { IUser } from '../types/userType'
import { useAppSelector } from './redux-hooks'

interface IAuth extends IUser {
  isAuth: boolean
}

export const useAuth = (): IAuth => {
  const { email, token, id } = useAppSelector((state) => state.user)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
