import { configureStore } from '@reduxjs/toolkit'
import { pokemonsListSlice } from './slices'
import { themeReducer } from './slices/theme.slice'

export const store = configureStore({
  reducer: {
    themeReducer,
    pokemonsListReducer: pokemonsListSlice.listReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
