const mongoose = require('mongoose')

const connectMongo = (url) => {
    return mongoose.connect( url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectMongo
