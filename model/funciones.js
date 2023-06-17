module.exports = {    
    borrar: function(conexion, datos, funcion){
        conexion.query("DELETE FROM tbProductos WHERE ID = (?)", [datos.id],funcion)
        console.log('hecho')
        console.log(datos.id)
    },
    editar: function(conexion, datos, funcion){
        console.log('si quiere modificar')
        console.log(datos)
        conexion.query("UPDATE tbProductos SET nombre = (?), descripcion = (?), imagen =(?), precio= (?)  WHERE nombre = (?)", [datos.nombre, datos.descripcion, datos.imagen, datos.precio, datos.nombre],funcion)
    }
}