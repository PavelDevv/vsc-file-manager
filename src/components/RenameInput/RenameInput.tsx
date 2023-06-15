import React, { useEffect, useState, useRef, useCallback } from 'react'

import { ReactComponent as SubmitIcon } from './assets/check.svg'
import { ReactComponent as CancelIcon } from '../Controls/assets/delete.svg'

import styles from './RenameInput.module.css'

interface IProps {
  defaultValue: string
  handleSubmit: (newName: string) => void
  handleCancel: () => void
  removeFile: () => void
}

export const RenameInput: React.FC<IProps> = ({
  defaultValue,
  handleCancel,
  handleSubmit,
  removeFile,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [name, setName] = useState<string>(defaultValue)
  const isEmpty = defaultValue.length === 0

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setName(value)
  }

  const onSubmit = useCallback(() => handleSubmit(name), [handleSubmit, name])

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        if (isEmpty) {
          removeFile()
        } else {
          handleCancel()
        }
      }

      if (event.code === 'Enter') {
        if (name.length > 0) {
          onSubmit()
        } else if (isEmpty) {
          removeFile()
        }
      }
    },
    [handleCancel, onSubmit, removeFile, name],
  )

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (isEmpty) {
          removeFile()
        } else {
          handleCancel()
        }
      }
    },
    [handleCancel, removeFile],
  )

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('click', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, handleClickOutside])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  return (
    <div ref={containerRef} className={styles.renameInput}>
      <input
        spellCheck={false}
        maxLength={25}
        ref={inputRef}
        value={name}
        onChange={handleChange}
        type="text"
      />

      <button onClick={onSubmit}>
        <SubmitIcon className={styles.icon} />
      </button>

      <button onClick={handleCancel}>
        <CancelIcon className={styles.icon} />
      </button>
    </div>
  )
}
