import React from 'react'
import { observer } from 'mobx-react-lite'

import { File } from '../'
import filesStore from '../../store/filesStore'

import styles from './FilesTree.module.css'

export const FilesTree: React.FC = observer(() => {
  const { files, searchResults } = filesStore
  // no search results should be addedd too
  const items = searchResults.length > 0 ? searchResults : files

  return (
    <div className={styles.filesTree}>
      {items.map((file) => (
        <File {...file} nestingLevel={0} key={file.id} />
      ))}
    </div>
  )
})
