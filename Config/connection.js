let sql =require("mysql");


if (process.env.JAWDB_URL){
connecttion = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.connection({
    host: "localhost",
  port: 3306,
  user: "root",
  password: "Cookieandrocky",
  database: "burger_db",

});
}

connection.connect(function(err){
    if (err) {
        console.error("error connecting" + err.stack);
        return;
    

    }
    console.log("connected as id" + connecion.threadId);
});
module.exports = connections;