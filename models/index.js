const Users = require('./Users');
const Profile = require('./Profile');

Profile.belongsTo(Users, {
  foreignKey: 'user_id'
});

module.exports = { Users, Profile };