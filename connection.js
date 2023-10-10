const mongoose = require('mongoose');

const connectToDb = (url)=> mongoose.connect(url)
.then(()=>console.log('connected to mongodb....'))
.catch((err)=> console.log(err))

module.exports = connectToDb