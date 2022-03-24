import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import NomineeCard from '../NomineeCard'
import { nominee, category } from '../../mockData/data'

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

it('NomineeCard calls select function when select button clicked', () => {
  const selectNominee = { selectNominee: () => {} }
  const mock = jest.spyOn(selectNominee, 'selectNominee').mockResolvedValue()
  const nomineeCard = (
    <NomineeCard item={nominee} category={category} selectNominee={mock} />
  )
  const { getByText } = render(nomineeCard)

  expect(getByText(nominee.title)).toBeTruthy()
  fireEvent.click(getByText('Select'))
  expect(mock).toBeCalled()
})
