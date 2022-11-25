import { render } from '@redwoodjs/testing/web'

import GroupsListGroup from './GroupsListGroup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupsListGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupsListGroup />)
    }).not.toThrow()
  })
})
