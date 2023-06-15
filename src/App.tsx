import React from 'react'
import { SearchBar, FilesTree, Header } from './components/'

import styles from './App.module.css'

// husky
// animations (appear, disappear)
// complexity (search of tree nodes), more alghoritms with different complexity, functions such as in VSC (add, delete, rename, innerSort(folders first then files))
// a lot of files (for virtualizations or smthng else)
// mobx and redux versions (mobx store with getter for search query)
// light/dark mode with smooth transition
// tests

const App: React.FC = () => {
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
