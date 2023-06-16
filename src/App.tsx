import React, { useEffect } from 'react'
import { SearchBar, FilesTree, Header } from 'components'

import { setInitialTheme } from 'utils'

import styles from './App.module.css'

// adding files stoped working probably because of computed get sortedChildren
// virtualization (test search and nested adding files and nested sort, test on reduced perfomance)
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
