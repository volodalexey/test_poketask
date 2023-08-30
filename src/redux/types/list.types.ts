import { type NamedAPIResource } from '../../models'

export interface InitialListState {
  offset: number
  limit: number
  query: string
  next: string | null
  previous: string | null
  count: number
  results: NamedAPIResource[]
}

export interface IPokemonsListState extends InitialListState {}

export type ResourcesListState = IPokemonsListState
