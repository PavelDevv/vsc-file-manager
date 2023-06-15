import React from 'react'
import { observer } from 'mobx-react-lite'
import filesStore from '../../store/filesStore'

import styles from './SearchBar.module.css'

export const SearchBar: React.FC = observer(() => {
  const { query } = filesStore

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    filesStore.setQuery(value)
  }

  return (
    <div className={styles.searchBar}>
      <input
        value={query}
        onChange={handleChange}
        placeholder="Type file/folder name"
        type="text"
      />
    </div>
  )
})
