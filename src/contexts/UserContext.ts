import { createContext } from 'react'
import { UserContextInterface } from '../interfaces/User/UserContextInterface'

const UserContext = createContext<UserContextInterface | null>(null)

export default UserContext
