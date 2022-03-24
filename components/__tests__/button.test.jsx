import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import Button from '../Button'
// import { nominee, category } from '../../mockData/data'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

it('Button calls select function when clicked', () => {
  const selectNominee = { selectNominee: () => {} }
  const mock = jest.spyOn(selectNominee, 'selectNominee').mockResolvedValue()
  const buttonText = 'Submit'
  const button = (
    <Button onClick={mock}>{buttonText}</Button>
  )
  const { getByText } = render(button)

  expect(getByText(buttonText)).toBeTruthy()
  fireEvent.click(getByText(buttonText))
  expect(mock).toBeCalled()
})
