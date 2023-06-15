import React from 'react'
import cx from 'classnames'

import AddFileIcon from './assets/add-file.svg'
import AddFolderIcon from './assets/add-folder.svg'
import DeleteIcon from './assets/delete.svg'
import RenameIcon from './assets/pen.svg'

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
            <img src={AddFileIcon} alt="Add File" />
          </button>
          <button onClick={addFolder}>
            <img src={AddFolderIcon} alt="Add Folder" />
          </button>
        </>
      )}
      <button onClick={startRename}>
        <img src={RenameIcon} alt="Rename" />
      </button>
      <button onClick={removeFile}>
        <img src={DeleteIcon} alt="Delete" />
      </button>
    </div>
  )
}
