import { render } from '@redwoodjs/testing/web'

import GroupsMenuLayout from './GroupsMenuLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GroupsMenuLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupsMenuLayout />)
    }).not.toThrow()
  })
})
