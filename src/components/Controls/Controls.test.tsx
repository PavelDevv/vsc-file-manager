import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Controls } from './Controls'

describe('Test Controls', () => {
  it('Test file type component appearance', async () => {
    render(
      <Controls
        nestingLevel={0}
        type="file"
        startRename={() => {}}
        addFile={() => {}}
        addFolder={() => {}}
        removeFile={() => {}}
      />,
    )
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
  })
  it('Test folder type component appearance', () => {
    render(
      <Controls
        nestingLevel={0}
        type="folder"
        startRename={() => {}}
        addFile={() => {}}
        addFolder={() => {}}
        removeFile={() => {}}
      />,
    )
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(4)
  })

  it('Tes nested folder type component appearance', () => {
    render(
      <Controls
        nestingLevel={4}
        type="folder"
        startRename={() => {}}
        addFile={() => {}}
        addFolder={() => {}}
        removeFile={() => {}}
      />,
    )
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(3)
  })
})
