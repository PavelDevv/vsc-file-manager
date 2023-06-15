import React, { useState } from 'react'
// import cx from 'classnames'
import { getTheme, setTheme as setStorageTheme } from 'utils'

import styles from './Header.module.css'

import { ReactComponent as SunIcon } from './assets/sun.svg'
import { ReactComponent as MoonIcon } from './assets/moon.svg'

export const Header: React.FC = () => {
  const [_theme, setTheme] = useState<Theme>(getTheme())

  const setDarkTheme = () => {
    setTheme('DARK')
    setStorageTheme('DARK')
  }
  const setLightTheme = () => {
    setTheme('LIGHT')
    setStorageTheme('LIGHT')
  }

  return (
    <header className={styles.header}>
      <button onClick={setDarkTheme} className={styles.modeButton}>
        <MoonIcon className={styles.icon} />
      </button>
      <button onClick={setLightTheme} className={styles.modeButton}>
        <SunIcon className={styles.icon} />
      </button>
    </header>
  )
}
