import { render } from '@redwoodjs/testing/web'

import StudentSems from './StudentSems'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentSems', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentSems />)
    }).not.toThrow()
  })
})
