let sql = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connecttion = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.connection({
    host: "localhost",
    user: "root",
    password: "Cookieandrocky",
    database: "burger_db",
  });
};

connection.connect(function (err) {
  if (err) {
    console.error("error connecting" + err.stack);
    return;
  }
  console.log("connected as id" + connecion.threadId);
});
module.exports = connections;
