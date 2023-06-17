const connection = require('../conexion/conexion');

exports.save=(req,res)=>{
    const nombre= req.body.nombre;
    const imagen= req.body.imagen;
    const descripcion= req.body.descripcion;
    const precio= req.body.precio;
    connection.query('INSERT INTO tbProductos SET ?',{nombre:nombre, imagen:imagen, descripcion:descripcion, precio:precio}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/admin');
        }
    })
}
