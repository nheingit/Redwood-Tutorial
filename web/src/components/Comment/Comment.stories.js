import Comment from './Comment'

export const generated = () => {
  return (
    <div className="m-4">
      <Comment
        comment={{
          name: 'Noah Hein',
          createdAt: Date(),
          body: 'wow this blog really sucx',
        }}
      />
    </div>
  )
}

export default { title: 'Components/Comment' }
