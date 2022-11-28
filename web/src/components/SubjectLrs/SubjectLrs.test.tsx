import { render } from '@redwoodjs/testing/web'

import SubjectLrs from './SubjectLrs'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SubjectLrs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubjectLrs />)
    }).not.toThrow()
  })
})
