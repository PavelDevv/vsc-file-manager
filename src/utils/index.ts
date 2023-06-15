import { themes } from './themes'

export const debounce = (fn: (args: any) => void, time: number) => {
  let timeoutId: number

  return (...args: any) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(args), time)
  }
}

export const getTheme = (): Theme => {
  const themeItem = window.localStorage.getItem('theme')

  if (themeItem === 'undefined' || !themeItem) {
    return 'DARK'
  } else {
    if (themeItem === 'DARK') {
      return 'DARK'
    } else if (themeItem === 'LIGHT') {
      return 'LIGHT'
    }
  }

  return 'DARK'
}

export const setInitialTheme = () => {
  let theme = window.localStorage.getItem('theme')

  if (theme === 'undefined' || !theme) {
    theme = 'DARK'
    window.localStorage.setItem('theme', 'DARK')
  }

  const selectedTheme: ITheme = themes[theme]

  Object.keys(selectedTheme).forEach((key: string) => {
    const value = selectedTheme[key]
    document.documentElement.style.setProperty(key, value)
  })
}

export const setTheme = (theme: 'DARK' | 'LIGHT') => {
  window.localStorage.setItem('theme', theme)
  const selectedTheme: ITheme = themes[theme]

  Object.keys(selectedTheme).forEach((key: string) => {
    const value = selectedTheme[key]
    document.documentElement.style.setProperty(key, value)
  })
}
