const { User } = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {
  profile: async (req, res) => {
    try {
      const userId = req.user.id;
      User.findOne({ _id: userId }, (err, data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          res.status(500).json(err);
        }
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  updateProfile: async (req, res) => {
    try {
      const userId = req.user.id;

      if (req.body.hasOwnProperty("password")) {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);
        req.body = { ...req.body, password: hashed };
      }

      req.body;
      User.findOneAndUpdate(
        { _id: userId },
        req.body,
        { upsert: false },
        (err, data) => {
          if (data) {
            res.status(200).json({ message: "success" });
          } else {
            res.status(500).json(err);
          }
        }
      );
    } catch (error) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
