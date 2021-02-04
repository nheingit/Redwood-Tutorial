import { render } from '@redwoodjs/testing'

import Comment from './Comment'

describe('Comment', () => {
  it('renders successfully', () => {
    const comment = {
      name: 'john smith',
      createdAt: '2020-01-02T12:34:56Z',
      body: "we've found a jane doe and a john smith",
    }
    render(<Comment comment={comment} />)
    expect(screen.getByText(comment.name)).toBeInTheDocument()
    expect(screen.getByText(comment.body)).toBeInTheDocument()
    const dateExpect = screen.getByText('2 January 2020')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.nodeName).toEqual('TIME')
    expect(dateExpect).toHaveAttribute('datetime', comment.createdAt)
  })
  expect(() => {
    render(<Comment />)
  }).not.toThrow()
})
