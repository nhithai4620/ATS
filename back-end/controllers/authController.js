const { User } = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

let refreshTokens = [];

const authController = {
  register: async (req, res) => {
    try {
      var personInfo = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const newUser = await new User({
        email: personInfo.email,
        password: hashed,
        phone: personInfo?.phone,
        firstName: personInfo?.firstName,
        lastName: personInfo?.lastName,
        dob: personInfo?.dob,
        gender: personInfo?.gender
      });

      User.findOne({ email: personInfo.email }, async (err, data) => {
        if (!data) {
          const saveUser = await newUser.save();
          res.status(200).json(saveUser);
        } else {
          res
            .status(500)
            .json({ status: "error", error: "Username already in use" });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      User.findOne({ email: username }, async (err, data) => {
        if (data) {
          const validPassword = await bcrypt.compare(password, data.password);
          if (validPassword) {
            const accessToken = authController.generateAccessToken(data);
            const refreshToken = authController.generateRefreshToken(data);
            refreshTokens.push(refreshToken);

            res
              .status(200)
              .json({
                message: "success",
                accessToken: accessToken,
                refreshToken: refreshToken,
              });
          } else {
            res
              .status(403)
              .json({
                status: "error",
                error: "UnauthorizedException",
                message: "Unauthorized",
              });
          }
        } else {
          res
            .status(403)
            .json({
              status: "error",
              message: "This email is not regestered! please register",
            });
        }
      });
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  },

  generateRefreshToken: (user) => {
    return jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_REFRESH_KEY,
      { expiresIn: "365d" }
    );
  },

  profile: async (req, res) => {
    const bearerHeader = req.headers["authorization"];
    try {
      jwt.verify(bearerHeader, JWT_SECRET, (err, data) => {
        if (err) res.sendStatus(403);
        else {
          res.json({
            message: `Welcome to profile`,
            userData: data,
          });
        }
      });
    } catch (error) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = authController;
