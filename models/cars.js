const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },        
  description: { type: String, required: true },
  image: String,                                
  isReadyToEat: Boolean                        
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
