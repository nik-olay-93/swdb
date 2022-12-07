import { render } from '@redwoodjs/testing/web'

import TeacherMenuLayout from './TeacherMenuLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TeacherMenuLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TeacherMenuLayout />)
    }).not.toThrow()
  })
})
