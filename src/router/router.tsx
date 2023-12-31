import React from 'react'
import {
  createHashRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import { CLIENT_PATH } from '../constants'
import { HomePage, ErrorPage } from '../pages'
import { HomeLayout } from '../layouts'
import { PokemonViewPage } from '../pages/pokemon/pokemon.view'

const routes = createRoutesFromElements(
  <Route>
    <Route index element={<HomeLayout />} />

    <Route path={`/${CLIENT_PATH.app.$root}`}>
      <Route path={CLIENT_PATH.app.list.pokemons} >
        <Route index element={<HomePage />} />
        <Route path={':pokemonName'} element={<PokemonViewPage />} />
      </Route>
    </Route>

    <Route path="*" element={<ErrorPage error={new Error('Page not found')} />} />
  </Route>
)

export const router = import.meta.env.VITE_HASH_ROUTER === 'true' ? createHashRouter(routes) : createBrowserRouter(routes)
