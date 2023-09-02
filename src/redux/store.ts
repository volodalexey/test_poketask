import { configureStore } from '@reduxjs/toolkit'
import { themeReducer, pokemonsListSlice, filterReducer } from './slices'

export const store = configureStore({
  reducer: {
    themeReducer,
    filterReducer,
    pokemonsListReducer: pokemonsListSlice.listReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
