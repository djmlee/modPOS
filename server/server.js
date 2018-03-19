const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('../config/config');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
//https://stackoverflow.com/questions/11104028/process-env-node-env-is-undefined
const port  = process.env.PORT || 8080;
/*
  In many environments (e.g. Heroku),
  and as a convention, you can set the environment variable PORT
  to tell your web server what port to listen on.

  So process.env.PORT || 8080 means:
  whatever is in the environment variable PORT,
  or 8080 if there's nothing there.
*/
/* old code */
const validator = require('express-validator');

const csrf = require('csurf');
const csrfProtection = csrf();

const passport        = require('passport');
const LocalStrategy   = require('passport-local').Strategy;


// Configuration
// ================================================================================================

// Set up Mongoose
/*
  mongoose.connect()
  This is the minimum needed to connect the myapp database
  running locally on the default port (27017).
  If the local connection fails then try using 127.0.0.1
  instead of localhost. Sometimes issues may arise when the local hostname has been changed.
*/
/*
  if(isDev)
    then {config.db_dev},
    else {config.db}
*/
mongoose.connect(isDev ? config.db_dev : config.db, {
  useMongoClient: true //no longer necessary in mongoose 5.x and mongo 3.4+
});
mongoose.Promise = global.Promise;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routes
require('./routes')(app);

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(historyApiFallback({
    verbose: false
  }));

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    contentBase: path.resolve(__dirname, '../client/public'),
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
  /*
    express.static() - https://expressjs.com/en/starter/static-files.html
    To serve static files such as images, CSS files, and JS files,
    use the express.static built-in middleware function in Express
  */
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function (req, res) {
    //serves the index.html file
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
      //http://expressjs.com/en/api.html#res.sendFile
    res.end();
      //http://expressjs.com/en/api.html#res.end
  });
}

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
