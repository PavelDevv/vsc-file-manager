import { describe, it, expect } from 'vitest'
import { sortFiles } from './index'
import { FileModel } from 'models/fileModel'

describe('Test utils functions', () => {
  it('test files sort function', () => {
    const firstFile = new FileModel({ name: 'some file', type: 'file' })
    const secondFile = new FileModel({ name: 'folder', type: 'folder' })
    const thirdFile = new FileModel({ name: 'at.txt', type: 'file' })

    const files = [firstFile, secondFile, thirdFile]
    const sortedFiles = [secondFile, thirdFile, firstFile]
    sortFiles(files)

    expect(files).toEqual(sortedFiles)
  })
})
