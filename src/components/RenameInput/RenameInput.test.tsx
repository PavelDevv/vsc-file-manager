import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RenameInput } from './RenameInput'

const handleSubmit = (_newName: string) => vi.fn()
const handleCance = () => vi.fn()
const removeFile = () => vi.fn()

describe('Test RenameInput component', () => {
  it('Test component appearance', () => {
    render(
      <RenameInput
        defaultValue="something"
        handleSubmit={handleSubmit}
        handleCancel={handleCance}
        removeFile={removeFile}
      />,
    )

    const input = screen.getByText(
      (_content, element) => element?.tagName.toLowerCase() === 'input',
    )

    expect(input).toBeInTheDocument()
  })
  it('Test input change event', async () => {
    render(
      <RenameInput
        defaultValue="something"
        handleSubmit={handleSubmit}
        handleCancel={handleCance}
        removeFile={removeFile}
      />,
    )
    screen.debug()

    const input = screen.getByText(
      (_content, element) => element?.tagName.toLowerCase() === 'input',
    )

    await userEvent.type(input, ' new')

    expect(input).toHaveValue('something new')
  })
})
