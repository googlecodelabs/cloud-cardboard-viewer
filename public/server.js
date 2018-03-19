/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var errorHandler;

if (process.env.NODE_ENV === 'production') {
  require('@google/cloud-trace').start();
  errorHandler = require('@google/cloud-errors').start();
}

if (process.env.GCLOUD_PROJECT) {
  require('@google-cloud/debug-agent').start();
}

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var google = require('googleapis');
var youtube = google.youtube('v3');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/data.json', function (req, res, next) {
  youtube.search.list({
    part: 'snippet',
    type: 'video',
    q: 'google+cardboard+video+3d',
    auth: process.env.API_KEY
  }, function (err, result) {
    if (err) {
      return next(err);
    }
    res.json(result);
  });
});

app.get('/search', function (req, res, next) {
  youtube.search.list({
    part: 'snippet',
    type: 'video',
    q: req.query.q
  }, function (err, result) {
    if (err) {
      return next(new Error('Search error!'));
    }
    res.json(result);
  });
});

app.use('*', function (req, res) {
  return res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Basic error logger/handler
app.use(function (err, req, res, next) {
  res.status(500).send(err.message || 'Something broke!');
  next(err || new Error('Something broke!'));
});
if (process.env.NODE_ENV === 'production') {
  app.use(errorHandler.express);
}

if (module === require.main) {
  // Start the server
  var server = app.listen(process.env.port || 8080, function () {
    var port = server.address().port;

    console.log('App listening on port %s', port);
    console.log('Press Ctrl+C to quit.');
  });
}

module.exports = app;
