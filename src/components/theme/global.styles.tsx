import { Global, css } from "@emotion/react";
import { type AppTheme } from "../../styles";

export const GlobalStyles = ({ theme }: { theme: AppTheme }) => {
  return <Global styles={css`
    :root {
        color-scheme: ${theme.name};
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${theme.background.paper};
    }
  `} />
}
