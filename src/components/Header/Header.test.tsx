import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Test header component', () => {
  it('Test theme switch', async () => {
    render(<Header />)
    const Buttons = screen.getAllByRole('button')

    await userEvent.click(Buttons[1])
    const lightTheme = window.localStorage.getItem('theme')

    expect(lightTheme).toBe('LIGHT')

    await userEvent.click(Buttons[0])
    const darkTheme = window.localStorage.getItem('theme')

    expect(darkTheme).toBe('DARK')
  })
  it('Files in system tag appearance', () => {
    render(<Header />)
    const filesInSystemTag = screen.getByText(/Files in system: /)
    expect(filesInSystemTag).toBeInTheDocument()
  })
})
