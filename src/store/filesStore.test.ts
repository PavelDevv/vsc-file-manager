import { describe, it, expect } from 'vitest'
import filesStore from './filesStore'

describe('Test filesStore', () => {
  it('set search query', () => {
    filesStore.setQuery('test value')
    expect(filesStore.query).toBe('test value')
  })

  it('set empty search query', () => {
    filesStore.setQuery('')
    expect(filesStore.query).toBe('')
  })

  it('add item', () => {
    const { files } = filesStore
    const itemIndex = files.findIndex((item) => item.type === 'folder')
    const item = files[itemIndex]
    filesStore.add({ name: 'test item', type: 'file', id: item.id })
    const addedItem = item.children?.filter((item) => item.name === 'test item')[0]
    expect(item.children).toContainEqual(addedItem)
  })

  it('remove item', () => {
    const itemId = filesStore.files.find((item) => item.type === 'folder')?.id || ''
    const item = filesStore.files.find((item) => item.id === itemId) || {}
    filesStore.remove(itemId)
    expect(filesStore.files).not.toContainEqual(item)
  })

  it('rename item', () => {
    const itemId = filesStore.files.find((item) => item.type === 'folder')?.id || ''
    filesStore.rename(itemId, 'newTestItem')
    const item = filesStore.files.find((item) => item.name === 'newTestItem') || {}
    expect(filesStore.files).toContainEqual(item)
  })

  it('search results', () => {
    filesStore.setQuery('rbw')
    expect(filesStore.searchResults?.every((item) => item.name === 'rbw')).toBeTruthy()
  })
})
