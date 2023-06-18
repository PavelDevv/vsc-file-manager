import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('Test SearchBar component', () => {
  it('Test component appearance', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Type file/folder name')
    expect(input).toBeInTheDocument()
  })
  it('Test input change event', async () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Type file/folder name')

    await userEvent.type(input, 'some value')

    expect(input).toHaveValue('some value')
  })
})
