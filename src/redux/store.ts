import { configureStore } from '@reduxjs/toolkit'
import { themeReducer, pokemonsListReducer, filterReducer } from './slices'
import { pokemonsApi } from './pokemons.api'

export const store = configureStore({
  reducer: {
    themeReducer,
    filterReducer,
    pokemonsListReducer,
    [pokemonsApi.reducerPath]: pokemonsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
