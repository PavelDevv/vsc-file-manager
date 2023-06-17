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
})
