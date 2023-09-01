import { type ReactElement, type ReactNode } from "react"
import { useSelector } from "react-redux"
import { ThemeProvider } from "@emotion/react"
import { type RootState } from "../../redux"
import { type AppTheme } from "../../styles"
import { GlobalStyles } from "./global.styles"

export function Theme ({ children }: { children?: ReactNode }): ReactElement {
  const theme = useSelector<RootState, AppTheme>(
    (state) => state.themeReducer.theme
  )
  return <ThemeProvider theme={theme}>
    <GlobalStyles theme={theme} />
    {children}
  </ThemeProvider>
}
