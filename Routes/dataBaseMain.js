const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/RIGEL-GAMING', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports =exports= mongoose;
