import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_DEFAULT, BASE_URL, ENDPOINTS } from "../constants";
import { type Pokemon, type NamedAPIResourceList } from "../models";

interface GetPokemonsQuery { offset?: number, limit?: number }
interface GetPokemonQuery { id: string }

export const pokemonsApi = createApi({
  reducerPath: 'pokemonsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL.REST }),
  tagTypes: ['Pokemons', 'Pokemon'],
  endpoints: (builder) => ({
    getPokemons: builder.query<NamedAPIResourceList, GetPokemonsQuery>({
      query: ({ offset = API_DEFAULT.list.offset, limit = API_DEFAULT.list.limit }) => `${ENDPOINTS.POKEMON}?offset=${offset}&limit=${limit}`,
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ url }) => ({ type: 'Pokemons' as const, id: url })),
              { type: 'Pokemons' as const }
            ]
          : [
              { type: 'Pokemons' as const }
            ]
    }),
    getPokemon: builder.query<Pokemon, GetPokemonQuery>({
      query: ({ id }) => `${ENDPOINTS.POKEMON}/${id}`,
      providesTags: (result) => result
        ? [
            { type: 'Pokemon', id: result.id },
          ]
        : [
            { type: 'Pokemon' }
          ],
    })
  })
})

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonsApi;
