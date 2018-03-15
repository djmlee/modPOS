const fs = require('fs');
const path = require('path');

/* From old code */
/*
var express         = require('express');
var bcrypt          = require('bcrypt');
var passport        = require('passport');
var router          = express.Router();
*/
/* ------------ */

module.exports = (app) => {
  // API routes
  fs.readdirSync(__dirname + '/api/').forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};
