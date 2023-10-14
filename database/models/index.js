const { Person, PersonSchema } = require('./persons.model');
const { User, UserSchema } = require('./user.model');

console.log('Person', Person);
console.log('User', User);
function setupModels(sequelize) {
  Person.init(PersonSchema, Person.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setupModels;
