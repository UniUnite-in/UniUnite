// data/chats.js
export const profiles = [
  {
    id: '1',
    name: 'Alice',
    picture: { uri: 'https://picsum.photos/200/200?random=1' },
    messages: [
      { id: '1', sender: 'Alice', text: 'Hey, how’s it going?', timestamp: '2023-10-01T10:00:00Z' },
      { id: '2', sender: 'You', text: 'Pretty good, you?', timestamp: '2023-10-01T10:01:00Z' },
    ],
  },
  {
    id: '2',
    name: 'Bob',
    picture: { uri: 'https://picsum.photos/200/200?random=2' },
    messages: [
      { id: '1', sender: 'Bob', text: 'Did you finish the homework?', timestamp: '2023-10-02T14:00:00Z' },
    ],
  },
  {
    id: '3',
    name: 'Charlie',
    picture: { uri: 'https://picsum.photos/200/200?random=3' },
    messages: [
      { id: '1', sender: 'Charlie', text: 'Let’s study together!', timestamp: '2023-10-03T15:00:00Z' },
    ],
  },
  {
    id: '4',
    name: 'David',
    picture: { uri: 'https://picsum.photos/200/200?random=4' },
    messages: [
      { id: '1', sender: 'David', text: 'Check out these notes!', timestamp: '2023-10-04T16:00:00Z' },
    ],
  },
  {
    id: '5',
    name: 'Eve',
    picture: { uri: 'https://picsum.photos/200/200?random=5' },
    messages: [
      { id: '1', sender: 'Eve', text: 'Good luck on the exam!', timestamp: '2023-10-05T17:00:00Z' },
    ],
  },
];