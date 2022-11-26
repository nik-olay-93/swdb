import { render } from '@redwoodjs/testing/web'

import StudentLRs from './StudentLRs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentLRs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentLRs />)
    }).not.toThrow()
  })
})
