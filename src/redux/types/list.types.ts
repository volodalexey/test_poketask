export interface InitialListState {
  offset: number
  limit: number
}

export interface IPokemonsListState extends InitialListState {}

export type ResourcesListState = IPokemonsListState
