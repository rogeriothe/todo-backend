const mongoose = require('mongoose')
mongoose.Promise = global.Promise


module.exports = mongoose.connect('mongodb://root:ogfy1ixfqxz@189.43.21.147:27017/todo?authSource=admin')