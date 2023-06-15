import React, { useEffect } from 'react'
import { SearchBar, FilesTree, Header } from 'components'

import { setInitialTheme } from 'utils'

import styles from './App.module.css'

// cut folder with 0 children bar
// check for observer in File.tsx
// maybe rework files mock to generate it with model
// innerSort (folders first => then files, maybe custom sort with both name and type)
// responsive design
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
