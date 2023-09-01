import React, { type ReactElement } from 'react'
import { Navigate } from 'react-router-dom'
import { FULL_CLIENT_PATH } from '../constants'

export function HomeLayout (): ReactElement {
  return <Navigate to={FULL_CLIENT_PATH.pokemonsList} replace />
}
