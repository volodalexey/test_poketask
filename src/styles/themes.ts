import { useTheme } from "@emotion/react"
import { LS_KEY } from "../constants"

export type ThemeName = 'light' | 'dark'

export interface AppTheme {
  name: ThemeName
  text: {
    primary: string
    secondary: string
    disabled: string
  }
  action: {
    active: string
    hover: string
    selected: string
    disabled: string
    disabledBackground: string
  }
  background: {
    default: string
    paper: string
    secondary: string
  }
  divider: string
}

export const darkTheme: AppTheme = {
  name: 'dark',
  text: {
    primary: '#fff',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)'
  },
  action: {
    active: '#fff',
    hover: 'rgba(25, 255, 255, 0.08)',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)'
  },
  background: {
    default: '#121212',
    paper: '#121212',
    secondary: '#6b6b6b'
  },
  divider: 'rgba(255, 255, 255, 0.12)'
}

export const lightTheme: AppTheme = {
  name: 'light',
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  },
  background: {
    default: '#fff',
    paper: '#fff',
    secondary: '#efefef'
  },
  divider: 'rgba(0, 0, 0, 0.12)'
}

export function getStorageThemeName (): string | null {
  const lsThemeName = localStorage.getItem(LS_KEY.theme)
  return lsThemeName
}

export function getStorageTheme (): AppTheme | null {
  const lsThemeName = getStorageThemeName()
  switch (lsThemeName) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
  }
  return null
}

export function setStorageThemeName (themeValue: string): void {
  localStorage.setItem(LS_KEY.theme, themeValue)
}

export function setStorageTheme (theme: AppTheme): void {
  localStorage.setItem(LS_KEY.theme, theme.name)
}

const storageTheme = getStorageTheme()
export const DEFAULT_THEME = storageTheme ?? window.matchMedia('(prefers-color-scheme: dark)').matches ? darkTheme : lightTheme

export function useAppTheme (): AppTheme {
  return useTheme() as AppTheme
}

export interface ThemePropsType {
  theme?: AppTheme
}
