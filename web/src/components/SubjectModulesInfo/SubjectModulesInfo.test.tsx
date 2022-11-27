import { render } from '@redwoodjs/testing/web'

import SubjectModulesInfo from './SubjectModulesInfo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SubjectModulesInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubjectModulesInfo />)
    }).not.toThrow()
  })
})
