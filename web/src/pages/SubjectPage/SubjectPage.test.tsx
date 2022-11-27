import { render } from '@redwoodjs/testing/web'

import SubjectPage from './SubjectPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SubjectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubjectPage />)
    }).not.toThrow()
  })
})
