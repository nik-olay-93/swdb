import { render } from '@redwoodjs/testing/web'

import GroupsList from './GroupsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupsList />)
    }).not.toThrow()
  })
})
