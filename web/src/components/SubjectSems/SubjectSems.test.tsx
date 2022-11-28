import { render } from '@redwoodjs/testing/web'

import SubjectSems from './SubjectSems'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SubjectSems', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubjectSems />)
    }).not.toThrow()
  })
})
