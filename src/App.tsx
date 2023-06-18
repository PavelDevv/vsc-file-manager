import React, { useEffect } from 'react'
import { SearchBar, FilesTree, Header } from 'components'

import { setInitialTheme } from 'utils'

import styles from './App.module.css'

// react-virtuoso items updating bug (top level items not renaming instantly, items drop their state (remount))
// !! react-virtuoso remounts items on list change

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
