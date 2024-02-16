/** Database config for database. */


const { Client } = require("pg");
const {DB_URI} = require("./config");

let db = new Client({
  connectionString: DB_URI,
  user: 'dthorpe',
  password: require("./passkey"),
  host: 'localhost'
});

db.connect();


module.exports = db;
