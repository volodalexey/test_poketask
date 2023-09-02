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
  display: flex;
  flex-wrap: wrap;
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
  max-width: 500px;
`

export const ListLink = styled(Link)<ThemePropsType>`
  color: ${({ theme }) => theme.text.secondary};
  &:link { text-decoration: none; }
  &:visited { text-decoration: none; }
`
