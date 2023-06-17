var mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'productos'
})

connection.connect(
    (err)=>{
        if(!err){
            console.log('Conexion Establecida')
        }
        else{
            console.log('Conexion Fallida')
        }
    }
);
module.exports=connection;

/*connection.query("SELECT * FROM tabla_de_productos",function(err,resultado){
    console.log(resultado);
});

connection.end();*/