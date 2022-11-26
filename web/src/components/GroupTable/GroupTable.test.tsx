import { render } from '@redwoodjs/testing/web'

import GroupTable from './GroupTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GroupTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GroupTable />)
    }).not.toThrow()
  })
})
