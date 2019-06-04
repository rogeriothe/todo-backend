const mongoose = require('mongoose')
mongoose.Promise = global.Promise


module.exports = mongoose.connect('mongodb://admin:ogfy1ixfqxz@10.1.1.10/todo?authSource=admin')