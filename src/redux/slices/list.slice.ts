import { type ResourceType, type InitialListState } from '../types'
import { createSlice, type PayloadAction, type Draft, type Slice, type Reducer, type ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { type NamedAPIResource } from '../../models'
import { API_DEFAULT } from '../../constants'

export interface IListSlice {
  listSlice: Slice<InitialListState>
  listReducer: Reducer<InitialListState>
  setPage: ActionCreatorWithPayload<number, 'setList/setPage'>
  setPageSize: ActionCreatorWithPayload<number, 'setList/setPageSize'>
  setQuery: ActionCreatorWithPayload<string, 'setList/setQuery'>
  setResults: ActionCreatorWithPayload<Array<Draft<NamedAPIResource>>, 'setList/setResults'>
  setCount: ActionCreatorWithPayload<number, 'setList/setCount'>
  setPrevious: ActionCreatorWithPayload<string | null, 'setList/setPrevious'>
  setNext: ActionCreatorWithPayload<string | null, 'setList/setNext'>
}

export function createListSlice (resourceType: ResourceType) {
  const initialState: InitialListState = {
    offset: API_DEFAULT.list.offset,
    limit: API_DEFAULT.list.limit,
    query: '',
    next: null,
    previous: null,
    count: 0,
    results: []
  }

  return createSlice({
    name: `set${resourceType}List`,
    initialState,
    reducers: {
      setOffset: (state, action: PayloadAction<number>) => {
        state.offset = action.payload
      },
      setLimit: (state, action: PayloadAction<number>) => {
        state.limit = action.payload
      },
      setQuery: (state, action: PayloadAction<string>) => {
        state.query = action.payload
      },
      setResults: (state, action: PayloadAction<Array<Draft<NamedAPIResource>>>) => {
        state.results = action.payload
      },
      setCount: (state, action: PayloadAction<number>) => {
        state.count = action.payload
      },
      setPrevious: (state, action: PayloadAction<string | null>) => {
        state.previous = action.payload
      },
      setNext: (state, action: PayloadAction<string | null>) => {
        state.next = action.payload
      }
    }
  })
}
