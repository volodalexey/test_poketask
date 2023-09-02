import styled from "@emotion/styled";
import { type ThemePropsType } from "../../styles";

export const DivMain = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  max-width: 500px;
  margin: 0.5rem auto;
`

export const DivMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex: 1 1 auto;
  
`

interface ButtonPropsType extends ThemePropsType {
  fixedFlex?: boolean
}

export const Button = styled.button<ButtonPropsType>`
  ${(props) => props.fixedFlex === true ? 'flex: 0 0 auto;' : ''};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.action.disabled};
  border-radius: 1rem;
  background-color: transparent;
  &:focus {
    border-color: ${({ theme }) => theme.action.active};
    outline: 1px double ${({ theme }) => theme.action.disabled};
  }
  &:hover {
    border-color: ${({ theme }) => theme.action.hover};
  }
  &:active {
    border-color: ${({ theme }) => theme.action.active};
  }
  &:disabled {
    cursor: auto;
    border-color: ${({ theme }) => theme.action.disabled};
  }
`

export const Span = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
`
