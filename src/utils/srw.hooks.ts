import useSWR from 'swr'
import { type AxiosError } from 'axios'
import { type MainClient } from './main.client'
import { type Pokemon, type NamedAPIResourceList } from '../models'
import { FULL_CLIENT_PATH } from '../constants'

export function useListPokemons (mainClient: MainClient, offset?: number, limit?: number) {
  return useSWR<NamedAPIResourceList, AxiosError<string>>(
    [FULL_CLIENT_PATH.pokemonsList, offset, limit],
    async () => await mainClient.pokemon.listPokemons(offset, limit)
  )
}

export function usePokemon (mainClient: MainClient, id: string) {
  return useSWR<Pokemon, AxiosError<string>>(
    [FULL_CLIENT_PATH.pokemonsView$, id],
    async () => await mainClient.pokemon.getPokemonByName(id)
  )
}
