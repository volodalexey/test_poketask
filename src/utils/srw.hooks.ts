import useSWR from 'swr'
import { type AxiosError } from 'axios'
import { type MainClient } from './main.client'
import { type NamedAPIResourceList } from '../models'
import { ENDPOINTS } from '../constants'

export function useListPokemons (mainClient: MainClient, offset?: number, limit?: number) {
  return useSWR<NamedAPIResourceList, AxiosError<string>>(
    [ENDPOINTS.POKEMON, offset, limit],
    async () => await mainClient.pokemon.listPokemons(offset, limit)
  )
}
