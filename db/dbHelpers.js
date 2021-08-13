const connection = require('./index');

const dbHelpers = {
  get: (callback) => {
    connection.query(`SELECT * FROM grocery`, (err, results) => { callback(err, results); });
  },
  post: (req) => {
    const { label, quantity } = req;
    console.log(req);
    connection.query(`INSERT INTO grocery(label, quantity) VALUES ('${label}', ${quantity})`, (err, results) => {
      if (err) throw err;
      else console.log(results);
    });
  }
};

module.exports = dbHelpers;