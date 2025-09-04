const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: String,  
  Date_Of_Birth: String,  
  Hire_Date: String,
  ProfilePicture: Number,
  Nickname:String,
  Status: String,
  Level: { type: Number, default: 1 },
  Experience: { type: Number, default: 0 },
  TotalExperience: Number,
  First_Name: String,
  Last_Name: String,
  Department: String,
  Position: String,
  Answer_ques: Number,
  signin:{ type: Number, default: 0},
  redeemedGifts: [
    {
      giftName: String,
      redeemedDate: Date,
      expirationDate: String,
      redeemed: Boolean,
    },
  ]
}, { collection: 'EMPLOYEE' });

const User = mongoose.model('User', userSchema);

module.exports = User;
