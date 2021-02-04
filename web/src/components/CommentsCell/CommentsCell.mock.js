// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  comments: [
    {
      id: 1,
      name: 'Noah Hein',
      createdAt: '2020-01-02T12:34:56Z',
      body: 'first comment woohoo',
    },
    {
      id: 2,
      name: 'Ana Banana',
      createdAt: '2020-02-03T22:33:51Z',
      body: 'second comment bozo',
    },
  ],
})
