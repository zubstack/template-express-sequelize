const { faker } = require('@faker-js/faker');
const initialPosts = [
  {
    id: 'b56adfc2-ce21-4794-8cb2-460d29561b59',
    title: 'Javascript is awsome',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque cumque vel voluptatem consequuntur et consequatur.',
    author: faker.person.fullName(),
    location: faker.location.country(),
    image: faker.image.url(),
    categoryId: 2,
    isPrivate: true,
  },
  {
    id: 'c96adfc2-ce21-4794-8cb2-460d29561b59',
    title: 'Backend is incredible',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque cumque vel voluptatem consequuntur et consequatur.',
    author: faker.person.fullName(),
    location: faker.location.country(),
    image: faker.image.url(),
    categoryId: 2,
    isPrivate: false,
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
