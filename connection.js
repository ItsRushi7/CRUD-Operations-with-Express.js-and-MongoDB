 
////////////////////////////////////////////////////////////////////////
//
// Import Statment Use for mongodb connection use mongoose
//
////////////////////////////////////////////////////////////////////////
const mongodb = require('mongoose')


////////////////////////////////////////////////////////////////////////
//
//  connected to mongodb by using URl by using connect() method they 
//  will return promise which is handle by .then() method 
//
////////////////////////////////////////////////////////////////////////
const connected = mongodb.connect('mongodb://localhost:27017/RESTapi')

connected.then(() => {
    console.log('Mongodb Connected...')
})
    .catch((err) => {
        console.log('Mongodb Not Connected...')
    })


////////////////////////////////////////////////////////////////////////
//
// created the schema by using Schema() method which is get the object
//
////////////////////////////////////////////////////////////////////////
const userSchema = new mongodb.Schema({

    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isAdmin: {
        type: String,
        required: true,
    }
})

////////////////////////////////////////////////////////////////////////
//
// created the model for database which is name RESTapi
//
////////////////////////////////////////////////////////////////////////
const User = mongodb.model('User', userSchema)


////////////////////////////////////////////////////////////////////////
//
// Export all function 
//
////////////////////////////////////////////////////////////////////////
module.exports = {
    User
}