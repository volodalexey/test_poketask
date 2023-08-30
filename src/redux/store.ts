import { configureStore } from '@reduxjs/toolkit'
import { pokemonsListSlice } from './slices'

export const store = configureStore({
  reducer: {
    pokemonsListReducer: pokemonsListSlice.listReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
