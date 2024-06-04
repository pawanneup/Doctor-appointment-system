 const express = require('express');
 const router = express.Router();
 const User = require("../models/userModel");
 const bcrypt = require("bcryptjs");
 router.post('/register', async(req,res)=>{
    try{
      const userExists = await User.findOne({email:req.body.email});
      if(userExists)
         {
            return res.status(200.).send({message:"user already exists", sucess:false});
         }

      const password = req.body.password;

      const salt = await bcrypt.gensalt(10);

      const hashedPassword = await bcrypt.hash(password, salt);

      req.body.password = hashedPassword;

      const newuser = new User(req.body);

      await newuser.save();

      res.status(200).send({message: "user created sucessfully",sucess:true});
    }
    catch(error){
         res.status(500).send({message:"error creating user", success : false, error});
    }
 });
 router.post('/login', async(req,res)=>{
    try{

    }
    catch(error){
        
    }
 });
 module.exports = router;