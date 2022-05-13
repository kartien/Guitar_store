var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'products'
});
 
connection.connect(
    (err)=>{
        if(!err){console.log("Conection stable");}
        else{console.log("Conection Fails");}
    }
);
module.exports = connection;
/*
connection.query("SELECT * FROM tblproduct", function(err,result){
    console.log(result);
});
connection.end();*/