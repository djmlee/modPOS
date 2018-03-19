// Copy this file as config.js in the same folder, with the proper database connection URI.

//This file deals when Mongoose.connect() runs.
//If (isDev) then db_dev, else db
module.exports = {
  db: 'mongodb://localhost:27017/testdb',
  db_dev: 'mongodb://url:27017/testdb'
};
