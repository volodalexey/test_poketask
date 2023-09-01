import styled from "@emotion/styled";
import { type ThemePropsType } from "../../styles";
import { Link } from "react-router-dom";

interface UlPropsType {
  isLoading: boolean
}

export const Ul = styled.ul<UlPropsType>`
  list-style: none;
  position: relative;
  transition: opacity 0.3s;
  ${({ isLoading }) => isLoading
? `
    clear: both;
    opacity: 0.5;
    user-select: none;
    pointer-events: none;
  `
: ''};
`

export const ListItem = styled.li`
  margin-left: 1rem;
  margin-right: 1rem;
`

export const ListLink = styled(Link)<ThemePropsType>`
  color: ${({ theme }) => theme.text.secondary};
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
`

export const TitleLine = styled.div`
  margin-top: 0.5rem;
  font-size: 1.5rem;
`

export const ContentLineDivider = styled.hr<ThemePropsType>`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-style: dashed;
  border-color: ${({ theme }) => theme.divider};
`
