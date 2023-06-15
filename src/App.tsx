import React, { useEffect } from 'react'
import { SearchBar, FilesTree, Header } from 'components'

import { setInitialTheme } from 'utils'

import styles from './App.module.css'

// adding files stoped working probably because of computed get sortedChildren
// responsive design
// check for observer in File.tsx
// animations (appear, disappear)
// a lot of files (for virtualizations or smthng else)
// tests

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
