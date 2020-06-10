const model = require('../models');
const Users = model.Users;
module.exports = class User {
    static async create(req,res){
        try{
            let data = req.body;
            let user = await Users.create(data);
            if(user){
                return res.withSuccess(201).withData(user).reply();
            }
        }catch(e){
            console.log(e);
            return res.withServerError(500).withErrorData(e).reply();
        }


    }

    static async update(req,res){
        try{
            let id = req.params.id;
            let data = req.body;
            delete req.body.id;//prevent reseting id
            let user = await Users.update(data,{
                where:{
                    id
                }
            });
            return res.withSuccess(200).reply();
        }catch(e){
            console.log(e);
            return res.withServerError(500).reply();
        }

    }

    static async delete(req,res){
        try{
            let id = req.params.id;
            let user =   await Users.destroy({
                where:{
                    id
                }
            });
          return  res.withSuccess(200).reply();

        }catch(e){
            console.log(e);
            res.withServerError(500).reply();
        }

    }

    static async list(req,res) {
        try {
            let users = await Users.findAll();
           return res.withSuccess(200).withData(users).reply();
        } catch (e) {
            console.log(e);
            res.withServerError(500).reply();
        }
    }

    static async read(req,res){
        try{
            let id = req.params.id;

            let user = await Users.findOne({
                where:{
                    id
                }
            });
            if(user){
              return  res.withSuccess(200).withData(user).reply();
            }
            return res.withClientError(404).reply();
        }catch(e){
            console.log(e);
            res.withServerError(500).reply();
        }
    }
}