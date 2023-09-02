import styled from "@emotion/styled";
import { type ThemePropsType } from "../../styles";

export const Fieldset = styled.fieldset<ThemePropsType>`
    position: sticky;
    top: 0;
    left: 0;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.paper};
    z-index: 1;
`;

export const Legend = styled.legend<ThemePropsType>`
    border-color: ${({ theme }) => theme.divider};
    background-color: ${({ theme }) => theme.background.paper};
`;

export const Button = styled.button<ThemePropsType>`
    color: ${({ theme }) => theme.text.secondary};
    border: 1px solid ${({ theme }) => theme.text.secondary};
    background-color: transparent;
    font-weight: bold;
    &:hover {
        color: black;
        background-color: ${({ theme }) => theme.background.secondary};
    }
    padding: 0 4px;
    margin: 0 8px;
    cursor: pointer;
`;

export const FilterContent = styled.div`
    padding: 8px;
    display: flex;
    flex-flow: row wrap;
`;

export const FilterItemLabel = styled.label<ThemePropsType>`
    margin: 4px;
    color: ${({ theme }) => theme.text.primary};
    background-color: ${({ theme }) => theme.background.secondary};
    padding: 8px;
    border-radius: 6px;
    display: flex;
`;

export const FilterItemCheckbox = styled.input`
    margin-left: 6px;
`;
