const connection = require('./index');

const dbHelpers = {
  get: (callback) => {
    connection.query(`SELECT * FROM grocery`, (err, results) => { callback(err, results); });
  },
  post: (req, callback) => {
    const { label, quantity } = req;
    connection.query(`INSERT INTO grocery(label, quantity) VALUES ('${label}', ${quantity})`, (err, results) => {
      callback(err, results);
    });
  }
};

module.exports = dbHelpers;