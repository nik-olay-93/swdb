import { render } from '@redwoodjs/testing/web'

import NavBarLayout from './NavBarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NavBarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavBarLayout />)
    }).not.toThrow()
  })
})
