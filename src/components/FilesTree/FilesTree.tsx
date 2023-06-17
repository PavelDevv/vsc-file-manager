import React from 'react'
import { observer } from 'mobx-react-lite'

import { File } from 'components'
import filesStore from 'store/filesStore'

import { Virtuoso } from 'react-virtuoso'

import styles from './FilesTree.module.css'

export const FilesTree: React.FC = observer(() => {
  const { files, searchResults } = filesStore

  const noResults = searchResults && searchResults.length === 0
  const items = searchResults && searchResults.length > 0 ? searchResults : files

  return (
    <div className={styles.filesTree}>
      {noResults && <p className={styles.noResults}>No results</p>}

      {!noResults && (
        <Virtuoso
          useWindowScroll
          data={items}
          itemContent={(_index, file) => <File nestingLevel={1} {...file} key={file.id} />}
        />
        // {items.map((file) => (
        //   <File nestingLevel={1} {...file} key={file.id} />
        // ))}
      )}
    </div>
  )
})
