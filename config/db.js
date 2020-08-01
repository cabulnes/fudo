const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

module.exports = {
  // configure the code below with your username, password and mlab database information
  database: 'mongodb+srv://losbulnes:1234@cluster0.bnzka.mongodb.net/CrudDB?retryWrites=true&w=majority',   //prod
  //database: 'mongodb://localhost:27017/meanauth',    //dev
  secret: 'secret'

}
