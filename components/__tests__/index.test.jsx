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
  })
})