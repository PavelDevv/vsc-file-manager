import React from 'react'

import styles from './Header.module.css'

import SunIcon from './assets/sun.svg'
import MoonIcon from './assets/moon.svg'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <button className={styles.modeButton}>
        <img src={SunIcon} alt="Light mode" />
      </button>
      <button className={styles.modeButton}>
        <img src={MoonIcon} alt="Dark mode" />
      </button>
    </header>
  )
}
