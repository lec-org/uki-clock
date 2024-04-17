import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
type AuthState = {
  isLogin: boolean
  setLogin: (isLogin: boolean) => void
  username: string
  password: string
  nickname: string
  token: string
  avatar: string
}
export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      isLogin: false,
      setLogin: (isLogin: boolean) => set({ isLogin }),
      username: '',
      password: '',
      nickname: '',
      token: '',
      avatar: ''
    }),
    {
      name: 'auth',
      storage: createJSONStorage(() => localStorage)
    }
  )
)
