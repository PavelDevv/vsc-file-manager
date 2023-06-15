import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { observer } from 'mobx-react-lite'
import filesStore from '../../store/filesStore'

import { Controls, RenameInput } from '../'

import FileIcon from './assets/file.svg'
import FolderIcon from './assets/folder.svg'

import styles from './File.module.css'

type TFileIcon = Record<FileType, string>

const iconMap: TFileIcon = {
  file: FileIcon,
  folder: FolderIcon,
}

interface IProps {
  nestingLevel: number
}

type AllProps = IFile & IProps

export const File: React.FC<AllProps> = observer(({ name, children, id, nestingLevel }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isRenameMode, setIsRenameMode] = useState<boolean>(false)
  const type = children !== undefined ? 'folder' : 'file'

  const toggleFolder = () => setIsOpen(!isOpen)

  const startRename = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsRenameMode(true)
  }

  const closeRename = () => setIsRenameMode(false)

  const submitRename = (newName: string) => {
    filesStore.rename(id, newName)
    closeRename()
  }

  const addFile = () => {
    filesStore.add({ name: '', id })
    if (!isOpen) setIsOpen(true)
  }

  const addFolder = () => {
    filesStore.add({ name: '', withChildren: true, id })
    if (!isOpen) setIsOpen(true)
  }

  const removeFile = () => {
    filesStore.remove(id)
  }

  useEffect(() => {
    if (!name.length) {
      setIsRenameMode(true)
    }
  }, [name])

  return (
    <div className={styles.file}>
      <div className={styles.infoAndControls}>
        <div
          onClick={type === 'folder' ? toggleFolder : undefined}
          className={cx({
            [styles.fileInfo]: true,
            [styles.isOpen]: isOpen,
          })}
        >
          <img className={styles.typeIcon} src={iconMap[type]} alt={type} />
          {!isRenameMode ? (
            <p>{name}</p>
          ) : (
            <RenameInput
              defaultValue={name}
              handleCancel={closeRename}
              handleSubmit={submitRename}
              removeFile={removeFile}
            />
          )}
        </div>
        <Controls
          className={styles.controls}
          removeFile={removeFile}
          addFile={addFile}
          addFolder={addFolder}
          startRename={startRename}
          type={type}
        />
      </div>
      {isOpen && (
        <div className={styles.children}>
          {children?.map((file) => (
            <File key={file.id} nestingLevel={nestingLevel + 1} {...file} />
          ))}
        </div>
      )}
    </div>
  )
})