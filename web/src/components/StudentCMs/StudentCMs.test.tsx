import { render } from '@redwoodjs/testing/web'

import StudentCMs from './StudentCMs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentCMs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentCMs />)
    }).not.toThrow()
  })
})
