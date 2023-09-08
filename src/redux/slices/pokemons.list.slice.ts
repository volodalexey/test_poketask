import { ResourceType } from '../types'
import { type IListSlice, createListSlice } from './list.slice'

export interface IPokemonsListSlice extends IListSlice {}

export const pokemonsListSlice = createListSlice(ResourceType.Pokemons)
export const pokemonsListReducer = pokemonsListSlice.reducer
