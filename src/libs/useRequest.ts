import useSWR from 'swr'
import { AxiosError } from 'axios'
import { MainClient } from '../clients'
import { NamedAPIResourceList } from '../models'
import { ENDPOINTS } from '../constants'

export function useListPokemons(api: MainClient, offset?: number, limit?: number) {
  return useSWR<NamedAPIResourceList, AxiosError<string>>(
    [ENDPOINTS.POKEMON, offset, limit],
    () => api.pokemon.listPokemons(),
  )
}