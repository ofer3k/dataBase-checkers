const express=require('express')
const User=require('./../model/userModel')
const router=express.Router()

// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // support json encoded bodies
// app.use(bodyParser.urlencoded({ extended: true })); 

//Post one user
router.post('/users',async (req,res)=>{
    const user= new User(req.body)
    const {name, email, pasword} = req.body
    
    try{
        await user.save()
        // res.status(201).send(user)
        // res.redirect('http://localhost:3000?name='+user.name)
        res.redirect('http://localhost:3005?name='+user.name)
    }catch(e){
        // res.status(400).send(e)
        res.redirect('http://localhost:3001/signup.html')
    }
})
//post login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        // res.redirect('http://localhost:3000?name='+user.name)
        res.redirect('http://localhost:3005?name='+user.name)
    } catch (e) {
        // res.status(400).send()
        res.redirect('http://localhost:3001/signin.html')
    }
})
//Get all users
router.get('/users',async (req,res)=>{
    try{
        const users= await User.find({})
        res.status(200).send(users)
    }catch(e){
        res.status(500).send(e)
    }
})
//Get one user by id
router.get('/users/:id',async (req,res)=>{
  const _id=req.params.id
    try{
        const user= await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e)
    }
})
//update one user- inc his score by one.
router.get('/users/update/:name',async(req,res)=>{
    try{
        const name=req.params.name
        const user=await User.findOneAndUpdate({"name":name},{$inc:{"score":1}},{new:true,runValidators:true})

        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(400).send(e)
    }
})
//delete one user
router.delete('/users/:id',async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id)
        if(!user)
        {
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send(e)
    }
})

// const updateUser=db.collection('users').updateOne({name:'ofer'},{$inc:{score:1}})

module.exports=router