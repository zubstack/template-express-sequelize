const { faker } = require('@faker-js/faker');

const initialPosts = [
  {
    id: 1,
    title: 'Javascript is awsome',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque cumque vel voluptatem consequuntur et consequatur.',
    author: faker.person.fullName(),
  },
  {
    id: 2,
    title: 'Backend is incredible',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque cumque vel voluptatem consequuntur et consequatur.',
    author: faker.person.fullName(),
  },
];

const categories = [
  { id: 1, name: 'programming' },
  { id: 2, name: 'algorithms' },
  { id: 3, name: 'design' },
];

module.exports = {
  initialPosts,
  categories,
};
