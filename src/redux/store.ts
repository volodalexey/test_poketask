import { configureStore } from '@reduxjs/toolkit'
import { themeReducer, pokemonsListReducer, filterReducer } from './slices'

export const store = configureStore({
  reducer: {
    themeReducer,
    filterReducer,
    pokemonsListReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
