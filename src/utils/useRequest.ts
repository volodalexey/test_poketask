import useSWR from 'swr'
import { type AxiosError } from 'axios'
import { type MainClient } from '../clients'
import { type NamedAPIResourceList } from '../models'
import { ENDPOINTS } from '../constants'

export function useListPokemons (api: MainClient, offset?: number, limit?: number) {
  return useSWR<NamedAPIResourceList, AxiosError<string>>(
    [ENDPOINTS.POKEMON, offset, limit],
    async () => await api.pokemon.listPokemons()
  )
}
