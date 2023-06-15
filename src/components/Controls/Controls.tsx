import React from 'react'
import cx from 'classnames'

import { ReactComponent as AddFileIcon } from './assets/add-file.svg'
import { ReactComponent as AddFolderIcon } from './assets/add-folder.svg'
import { ReactComponent as DeleteIcon } from './assets/delete.svg'
import { ReactComponent as RenameIcon } from './assets/pen.svg'

import styles from './Controls.module.css'

interface IProps {
  type: FileType
  className?: string
  startRename: (event: React.MouseEvent) => void
  addFile: () => void
  addFolder: () => void
  removeFile: () => void
}

export const Controls: React.FC<IProps> = ({
  type,
  className,
  startRename,
  addFile,
  addFolder,
  removeFile,
}) => {
  return (
    <div className={cx(styles.controls, className)}>
      {type === 'folder' && (
        <>
          <button onClick={addFile}>
            <AddFileIcon className={styles.icon} />
          </button>
          <button onClick={addFolder}>
            <AddFolderIcon className={styles.icon} />
          </button>
        </>
      )}
      <button onClick={startRename}>
        <RenameIcon className={styles.icon} />
      </button>
      <button onClick={removeFile}>
        <DeleteIcon className={styles.icon} />
      </button>
    </div>
  )
}
