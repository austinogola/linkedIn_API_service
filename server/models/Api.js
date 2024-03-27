const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define User schema
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema)


const accountSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    credits: { type: Number, required: true },
    payments: [
        {
            amount: { type: Number, required: true }, // Price paid for credits
            credits: { type: Number, required: true }, // Amount of purchased credits
            date: { type: Date, default: Date.now } // Purchase date
        }
    ],
    apiUsage:{
        type:Array,
        default: [] 
      },
});
const Account = mongoose.model('Account', accountSchema);



// Define User schema
const apiKeySchema = new Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name:{type:String},
    key: { type: String, required: true, unique: true },
    created:{ type: Number,default:new Date().getTime()},
    lastUsed:{type:Number,default:0},
    usage:[{type: Number}]
});
const ApiKey = mongoose.model('ApiKey', apiKeySchema);

module.exports = { User, ApiKey,Account };