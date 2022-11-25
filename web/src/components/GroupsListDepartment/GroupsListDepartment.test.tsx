import { render } from '@redwoodjs/testing/web'

import GroupsListDepartment from './GroupsListDepartment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupsListDepartment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupsListDepartment />)
    }).not.toThrow()
  })
})
