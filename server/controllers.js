const dbHelpers = require('../db/dbHelpers.js');

const controllers = {
  get: (req, res) => {
    dbHelpers.get((err, results) => {
      if (err) { res.status(500).send(err); }
      else { res.status(200).send(results); }
    });
  },
  post: (req, res) => {
    dbHelpers.post(req, (err, results) => {
      if (err) { res.status(500).send(err); }
      else { res.status(200).send('Success!'); }
    });
  }
}

module.exports = controllers;