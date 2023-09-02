import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { UpdateFilterAction, type InitialFilterState } from "../types/filter.types"

const initialState: InitialFilterState = {
  allItems: [],
  selectedItems: []
}

export const filterSlice = createSlice({
  name: UpdateFilterAction,
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<string[]>) => {
      state.allItems = action.payload
      state.selectedItems = []
    },
    pushItems: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach(item => {
        if (!state.allItems.includes(item)) {
          state.allItems.push(item);
        }
      })
    },
    toggleItem: (state, action: PayloadAction<string>) => {
      if (state.selectedItems.includes(action.payload)) {
        state.selectedItems.splice(state.selectedItems.indexOf(action.payload), 1)
      } else {
        state.selectedItems.push(action.payload);
      }
    },
    toggleAll: (state) => {
      state.selectedItems = state.allItems.slice()
    },
    resetAll: (state) => {
      state.selectedItems = []
    },
  }
})

export const { setItems, pushItems, toggleItem, toggleAll } = filterSlice.actions
export const filterReducer = filterSlice.reducer
