const mongoose = require('mongoose')

// const server =

mongoose.connect('mongodb+srv://brad123:brad123@cluster0-gxy4a.mongodb.net/test?retryWrites=true&w=majority')

// module.exports = {
//   mongoURI: 'mongodb+srv://brad123:brad123@cluster0-gxy4a.mongodb.net/test?retryWrites=true&w=majority'
// }

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true
  }
})

module.exports = mongoose.model('Customer', CustomerSchema)