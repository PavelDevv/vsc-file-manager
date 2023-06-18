import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { File } from './File'
import { FileModel } from 'models/fileModel'

describe('Test File component', () => {
  it('Test file component appearance', async () => {
    const file = new FileModel({
      name: 'Test file',
      type: 'file',
    })
    render(<File nestingLevel={0} {...file} />)
    const name = screen.getByText(/Test file/)

    expect(name).toBeInTheDocument()
  })
  it('Test folder component appearance', async () => {
    const file = new FileModel({
      name: 'Test file',
      type: 'folder',
      children: [new FileModel({ name: 'child', type: 'file' })],
    })
    render(<File nestingLevel={0} {...file} />)
    const name = screen.getByText(/Test file/)

    await userEvent.click(name)

    const child = screen.getByText(/child/)

    expect(child).toBeInTheDocument()
  })
})
