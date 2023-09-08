import { type ReactElement, type ReactNode } from "react"
import { ThemeProvider } from "@emotion/react"
import { GlobalStyles } from "./global.styles"
import { useTypedSelector } from "../../hooks/useTypedSelector"

export function Theme ({ children }: { children?: ReactNode }): ReactElement {
  const theme = useTypedSelector(
    state => state.themeReducer.theme
  )
  return <ThemeProvider theme={theme}>
    <GlobalStyles theme={theme} />
    {children}
  </ThemeProvider>
}
