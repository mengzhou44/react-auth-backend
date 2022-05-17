const data = {
  users: require('../model/users.json'),
  setEmployees: function (data) {
    this.users = data.map((user) => {
      return {
        id: user.id,
        username: user.username,
      };
    });
  },
};

const getAllUsers = (req, res) => {
  res.json(data.users);
};

module.exports = {
  getAllUsers,
};
