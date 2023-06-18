import React, { useState } from 'react'
import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import { getTheme, setTheme as setStorageTheme } from 'utils'
import filesStore from 'store/filesStore'

import styles from './Header.module.css'

import { ReactComponent as SunIcon } from './assets/sun.svg'
import { ReactComponent as MoonIcon } from './assets/moon.svg'

export const Header: React.FC = observer(() => {
  const [theme, setTheme] = useState<Theme>(getTheme())

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
      <p className={styles.filesInSystem}>Files in system: {filesStore.totalFilesCount}</p>
      <button onClick={setDarkTheme} className={styles.modeButton}>
        <MoonIcon
          className={cx({
            [styles.icon]: true,
            [styles.isActive]: theme === 'DARK',
          })}
        />
      </button>
      <button onClick={setLightTheme} className={styles.modeButton}>
        <SunIcon
          className={cx({
            [styles.icon]: true,
            [styles.isActive]: theme === 'LIGHT',
          })}
        />
      </button>
    </header>
  )
})
