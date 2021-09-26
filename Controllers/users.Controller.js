'use strict';

const { usersModel } = require('../Models/Users.model');

const createUser = async(req, res) => {
    let checkEmail=await usersModel.exists({ email: req.body.email })

  console.log(checkEmail);


    if (checkEmail){
    
        res.status(200).send("account is existed ");


    }else{

    let user = new usersModel({
        username: req.body.username,
        email: req.body.email,
        pp: req.body.img
    })
    user.save();
    res.status(200).send("accout was created ");
}
}
let getUser =async(req,res)=>{
    let emailnew=req.query.email;
    if(emailnew){
    let existedEmail= await usersModel.findOne({email:emailnew}).then(data=>{
        res.json(data);
    })
    console.log(existedEmail);
    }
}


module.exports=  {createUser,getUser};

