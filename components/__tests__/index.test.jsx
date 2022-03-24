import { render, screen  } from '@testing-library/react'
import Index from '../../pages/index'
import '@testing-library/jest-dom'
import Header from '../Header'
import Button from '../Button'

describe('Home', () => {
  it('Index page renders header', () => {
    render(<Index />)

    const { getByText } = render(<Header />);
    
    expect(getByText("AWARDS 2021")).toBeInTheDocument()
  }),
  it('Index page renders submit button', () => {
    render(<Index />)

    const { getByText } = render(<Button />);
    
    expect(getByText("Submit")).toBeInTheDocument()
  })
})