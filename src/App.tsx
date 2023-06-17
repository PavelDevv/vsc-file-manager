import React, { useEffect } from 'react'
import { SearchBar, FilesTree, Header } from 'components'

import { setInitialTheme } from 'utils'

import styles from './App.module.css'
import filesStore from 'store/filesStore'
import { observer } from 'mobx-react-lite'

// add total items count on top of the page
// increase items to 10k
// fix of sorting top layer and search results (do not sort)
// tests

// Features later: move files (to other folders)

const App: React.FC = observer(() => {
  useEffect(() => {
    setInitialTheme()
  }, [])
  return (
    <>
      <Header />
      <p>files in system: {filesStore.totalFilesCount}</p>
      <h1 className={styles.h1}>Search files you need</h1>
      <SearchBar />
      <FilesTree />
    </>
  )
})

export default App
