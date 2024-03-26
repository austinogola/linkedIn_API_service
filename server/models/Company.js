const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const companySchema = new mongoose.Schema({
  company_id:{type: String },
  name:{type: String },
  universal_name:{type: String },
  tagline:{type: String },
  entityUrn:{type: String },
  description:{type: String },
  phone:{type: String },
  followers:{type:Number},
  influencer:{type: Boolean },
  company_site:{type: String },
  headquarter:{type: Object, },
  specialities:{
    type: Array,
    default:[] 
  },
  company_industries:{
    type: Array,
    default:[] 
  },
  founded: {
    type: Object,
  },
  locations: {
    type: [Object],
  },
  funding_data: {
    type: Object,
    default: [] 
  },
  updates:{
    type:Array,
    default: [] 
  },
  last_called:{type: Number, default: new Date().getTime()}

});

// Create the Profile model based on the schema
const Company = mongoose.model('Company', companySchema);

module.exports = Company;
