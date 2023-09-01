import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { type AppTheme, DEFAULT_THEME, setStorageTheme } from "../../styles"
import { UpdateThemeAction, type InitialThemeState } from "../types/theme.types"

const initialState: InitialThemeState = {
  theme: DEFAULT_THEME
}

export const themeSlice = createSlice({
  name: UpdateThemeAction,
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<AppTheme>) => {
      state.theme = action.payload
      setStorageTheme(state.theme)
    }
  }
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
