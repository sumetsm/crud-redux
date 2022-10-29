import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import itSlice from './itSlice'
export const store = configureStore({
  reducer: {
    userSumet:userSlice,
    it:itSlice
  },
})