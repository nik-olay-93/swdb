import { render } from '@redwoodjs/testing/web'

import SubjectCms from './SubjectCms'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SubjectCms', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubjectCms />)
    }).not.toThrow()
  })
})
