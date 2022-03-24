import React from 'react'
import { cleanup, fireEvent, getByTestId, render } from '@testing-library/react'
import CategoryCard from '../CategoryCard'
import { category2, selectedNominees, nominee, nominee2, nominee3, nominee4 } from '../../mockData/data'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

it('Second NomineeCard from Category panel gets selected when its select button clicked', () => {
  const selectNominee = { selectNominee: () => {} }
  const mock = jest.spyOn(selectNominee, 'selectNominee').mockResolvedValue()
  const categoryCard = (
    <CategoryCard item={category2} selectNominee={mock} selectedNominees={selectedNominees} />
  )
  const { getByText, getByTestId } = render(categoryCard)

  expect(getByText(nominee.title)).toBeTruthy()
  expect(getByText(nominee2.title)).toBeTruthy()
  expect(getByText(nominee3.title)).toBeTruthy()
  expect(getByText(nominee4.title)).toBeTruthy()
  fireEvent.click(getByTestId(`Button.${nominee2.id}`))
  expect(mock).toBeCalledWith(
    {...nominee2}, {...category2}
   )
})
