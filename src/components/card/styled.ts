import styled from "@emotion/styled";
import { type ThemePropsType } from "../../styles";

export const CardWrapper = styled.div`
  position: relative;
`

export const CardContent = styled.div`
  margin: 16px;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const CardTitle = styled.h1<ThemePropsType>`
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  color: ${({ theme }) => theme.text.primary};
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

export const CardTitleBadge = styled.span`
  font-size: 16px;
  color: #ffffff;
  background-color: #6c757d;
  border-radius: 6px;
  margin-left: 16px;
  padding: 4px 7px;
  font-weight: 700;
  line-height: 1;
`

export const CardLine = styled.div`
  line-height: 1.5;
`

export const CardAvatarMeta = styled.div`
  padding-inline-end: 16px;
`

export const CardAvatar = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  background: transparent;
  border: 1px solid transparent;
  width: 96px;
  height: 96px;
  border-radius: 50%;
`

export const CardAvatarImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardTableHeader = styled.div<ThemePropsType>`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.text.primary};
  border-color: ${({ theme }) => theme.divider};
  border-style: solid;
  border-width: 1px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding: 4px 7px;
  background-color: #21252908;
`

export const CardTableBody = styled.div<ThemePropsType>`
  padding: 4px 7px;
  border-color: ${({ theme }) => theme.divider};
  border-style: solid;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const PrimaryText = styled.span<ThemePropsType>`
  color: ${({ theme }) => theme.text.primary};
`

export const SecondaryText = styled.span<ThemePropsType>`
  color: ${({ theme }) => theme.text.secondary};
`

export const ContentLineDivider = styled.hr<ThemePropsType>`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-style: dashed;
  border-color: ${({ theme }) => theme.divider};
`
