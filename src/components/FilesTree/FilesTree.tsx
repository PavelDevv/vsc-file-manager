import React from 'react'
import { observer } from 'mobx-react-lite'

import { File } from 'components'
import filesStore from 'store/filesStore'

import styles from './FilesTree.module.css'

export const FilesTree: React.FC = observer(() => {
  const { files, searchResults } = filesStore

  const noResults = searchResults && searchResults.length === 0
  const items = searchResults && searchResults.length > 0 ? searchResults : files

  return (
    <div className={styles.filesTree}>
      {noResults && <p className={styles.noResults}>No results</p>}
      {!noResults && items.map((file) => <File {...file} nestingLevel={0} key={file.id} />)}
    </div>
  )
})
