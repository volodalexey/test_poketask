import { configureStore } from '@reduxjs/toolkit'
import { themeReducer, pokemonsListSlice } from './slices'

export const store = configureStore({
  reducer: {
    themeReducer,
    pokemonsListReducer: pokemonsListSlice.listReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
