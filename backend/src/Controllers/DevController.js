const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async index(req, res){
        const { user } = req.header;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find( {
           // $and:[
                //{ _id: {$ne: user } },
                //{ _id: { $nin: user.likes }},
                //{ _id: { $nin: user.dislikes }},
            //],
        })
        return res.json(users);
    },

   async store(req, res){
        
        const { username } = req.body; 

        const userexists  = await Dev.findOne({user : username});

        if(userexists){
            return res.json(userexists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const{ name , bio , avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name,
            user: username ,
            bio,
            avatar

         });


        return res.json(dev);
    }
};