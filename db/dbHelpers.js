const connection = require('./index');

const dbHelpers = {
  get: (callback) => {
    connection.query(`SELECT * FROM grocery`, (err, results) => { callback(err, results); });
  },
  post: (req) => {
    const { label, quantity } = req;
    connection.query(`INSERT INTO grocery(label, quantity) VALUES ('${label}', ${quantity})`, (err, results) => {
      if (err) throw err;
      // how to get this to return to graphql stuff, return the latest input on the database?
      else console.log(results.data);
    });
  }
};

module.exports = dbHelpers;