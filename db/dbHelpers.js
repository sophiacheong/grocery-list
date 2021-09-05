const connection = require('./index');

const dbHelpers = {
  get: (callback) => {
    connection.query(`SELECT * FROM grocery`, (err, results) => {
      // does this work ??
      if (err) throw err;
      else callback(results);
    });
  },
  post: (req) => {
    const { label, quantity } = req;
    connection.query(`INSERT INTO grocery(label, quantity) VALUES ('${label}', ${quantity}); SELECT LAST_INSERT_ID();`, (err, results) => {
      // how do i get the results ?
      if (err) throw err;
      else console.log(results);
    });
  }
};

module.exports = dbHelpers;