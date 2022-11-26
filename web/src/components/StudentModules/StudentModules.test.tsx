import { render } from '@redwoodjs/testing/web'

import StudentModules from './StudentModules'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StudentModules', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StudentModules />)
    }).not.toThrow()
  })
})
