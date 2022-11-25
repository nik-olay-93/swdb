import { render } from '@redwoodjs/testing/web'

import GroupsListFaculty from './GroupsListFaculty'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupsListFaculty', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupsListFaculty />)
    }).not.toThrow()
  })
})
