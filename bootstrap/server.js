const express      	= require('express');
const app           = express();
const userRoutes    = require('../app/routes/user')(express.Router());
const cors          = require('cors');
const smooch        = require('../app/routes/middlewares/smooch');
const router        =   express.Router()






module.exports = class server{


  start(){
    app.get('/',function(req,res){
      res.send("Welcome to demo app");
    });
    app.use(cors());
    app.use(smooch());
    app.use(express.json());
    app.use('/users',userRoutes);
    app.listen(process.env.API_PORT||'3000',(err)=>{
      console.log(`> server started on port ${process.env.API_PORT||'3000'}`);
    });

    app.on('error',(err)=>{
      console.log(err);
      return;
    })



  }
}

