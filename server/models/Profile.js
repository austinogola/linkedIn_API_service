const mongoose = require('mongoose');

// Define the schema for the Profile model
const mainScheme={
    skills: {
        type: [
          {
            name: {
              type: String,
            },

          },
        ],
        default: [],
      },
      positions: {
        type: [
          {
            title: {
              type: String,
            },
            // Add other properties for positions as needed
          },
        ],
        default: [],
      },
  
    positions: {
      type: [String],
      default: [],
    },
    education: {
      type: [String],
      default: [],
    },
    certifications: {
        type: [String],
        default: [],
    },
    volunteership: {
        type: [String],
        default: [],
    },
      education: {
        type: [String],
        default: [],
      },
  }
const profileSchema = new mongoose.Schema({
  // Define the properties of the profile
  profileId:{
    type: String,
    required: true,
  },
  lastCalled:{
    type: String,
    required: true,
  },
  main:mainScheme ,
  details: {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    // Add other properties as needed
  },

  network: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Add other properties as needed
});

// Create the Profile model based on the schema
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
