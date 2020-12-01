const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')
//user schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            
            if(!validator.isEmail(value))
            {
                throw new Error('Email is invalid!')
            }
        }
    },
    score:{
        type:Number,
        default:0,
        
    }
})
//hash password before saving
userSchema.pre('save',async function(next){
    const user=this
    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }
    next()
})
//login if email was found and password is valid
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user
}

const User=mongoose.model('User',userSchema)
module.exports=User