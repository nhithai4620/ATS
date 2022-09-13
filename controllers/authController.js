const {User} = require("../models/user")
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

const authController = {
    register: async(req, res) =>{
        var personInfo = req.body;
        try{
            User.findOne({email:personInfo.email},async (err,data)=>{
                if(!data){
                    const newUser = new User(personInfo);
                    const saveUser = await newUser.save();
                    res.status(200).json(saveUser);
                }else{
                    res.status(500).json({ status: 'error', error: 'Username already in use' });
                }
            })
            
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    login: async(req, res) =>{
        try {
            const { username, password } = req.body

            User.findOne({email:username},(err,data)=>{
                if(data){
                    if(data.password ==  password){
                        const token = jwt.sign(
                            {
                                id: data._id,
                                username: data.username
                            },
                            JWT_SECRET
                        );

                        res.status(200).json({message: 'success', data: token});

                    }else{
                        res.status(403).json({ status: 'error', error: 'UnauthorizedException', message: 'Unauthorized' });
                    }
                } else{
                    res.status(403).json({ status: 'error', message: 'This Email Is not regestered!' });
                }
            });
        } catch (error) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    profile: async(req, res) =>{
        const bearerHeader = req.headers['authorization'];
        try {
            jwt.verify(bearerHeader,JWT_SECRET,(err,data)=>{
                if(err)
                    res.sendStatus(403);
                else{
                    res.json({
                        message:`Welcome to profile`,
                        userData: data
                    })   
                }
            })
        } catch (error) {
            console.log(err);
            res.status(500).json(err);
        }
    },

    getAllUsers: async(req, res) =>{
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
            console.log(error)
        }
    }
};

module.exports = authController;