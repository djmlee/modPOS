var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var businessRegistration = new Schema({
    fname : {
        type : String,
        required : true,
    },
    lname : {
        type : String,
        required : true,
    },
    company_id : {
        type : String,
        required : true,
    },
    company_position : {
        type : String,
        required : false,
        default: 'Employee'
    },
    email : {
        type : String,
        required : true,
        index: { unique: true }
    },
    password : {
        type : String,
        required : true,
    },
    isDeleted : {type: Boolean, default: false},
});

var User = module.exports = mongoose.model('Users', businessRegistration);

module.exports.createUser = function(newUser, callBack){
    // Generate a hash so that we store the user's password encrypted.
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newUser.password, salt, function(err, hash){
            newUser.password = hash;
            // save data provided
            newUser.save(callBack);
        });
    });
}

module.exports.getUserByEmail = function(email, callBack){
    var query = {email: email};
    User.findOne(query, callBack);
}

module.exports.getUserById = function(id, callBack){
    User.findById(id, callBack);
}

module.exports.verifyPassword = function(password, dbPassword, callback)
{
    bcrypt.compare(password, dbPassword, function(error, isMatch) {
        if(error) throw err;
        callback(null, isMatch);
    });
}
