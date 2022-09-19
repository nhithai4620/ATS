const {User} = require("../models/User");

const userController = {
  profile: async (req, res) => {
    try {
      User.find((err, data) => {
        if (data){
            res.status(200).json(data);
        } else{
            res.status(500).json(err);
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;