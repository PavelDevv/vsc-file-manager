import React, { useEffect } from 'react'
import { SearchBar, FilesTree, Header } from 'components'

import { setInitialTheme } from 'utils'

import styles from './App.module.css'

// fix of sorting top layer and search results (do not sort)
// tests

// Features later: move files (to other folders)

const App: React.FC = () => {
  useEffect(() => {
    setInitialTheme()
  }, [])

  return (
    <>
      <Header />
      <h1 className={styles.h1}>Search files you need</h1>
      <SearchBar />
      <FilesTree />
    </>
  )
}

export default App
