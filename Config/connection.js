let sql =require("mysql");


if (process.env.JAWDB_URL){
connecttion = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.connection({
    host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: ""

});
}

connection.connect(function(err){
    if (err) {
        console.error("error connecting" + err.stack);
        return;
    

    }
    console.log()
});
module.exports = connections;