const {User} = require("../models/User");

const userController = {
  profile: async (req, res) => {
    try {
      const userId = req.user.id;
      User.findOne({_id: userId},(err, data) => {
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