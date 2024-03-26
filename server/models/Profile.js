const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
  name: {type: String},
  active: {type: Boolean},
  logo: {type: String},
  objectUrn: {type: String}
});


const dateSchema = new mongoose.Schema({
  start: {},
  end: {} 
});
// Define the schema for the Profile mod
const profileSchema = new mongoose.Schema({
  profile_id:{type: String },
  first_name:{type: String },
  last_name:{type: String },
  headline:{type: String },
  summary:{type: String },

  industry:{type: String },
  influencer:{type: Boolean, },
  premium:{type: Boolean, },
  jobSeeker:{type: Boolean, },
  contact_info:{
    type: Object 
  },
  network_info: {
    type: Object,
  },
  location: {
    type: Object,
  },
  skills: {
    type: [String],
    default: [] 
  },
  positions: {
    type: [
      {
        company: {
          type: Object
        },
        date: {
          type: Object,
        },
        profile_positions:{
          type:Array
        }
      }
    ],
    default: [] 
  },
  education:{
    type:Array,
    default: [] 
  },
  updates:{
    type:Array,
    default: [] 
  },
  last_called:{type: Number, default: new Date().getTime()}

});

// Create the Profile model based on the schema
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
