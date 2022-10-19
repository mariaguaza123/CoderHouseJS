const express = require('express');
const app = express();
let contenedor = require("./Contenedor");
let nuevoContenedor = new contenedor();
const PORT = 8080;

app.get('/productos', async(req, res) => {
     let listaProductos = await nuevoContenedor.getAllProducts();
         res.send(listaProductos);
    });
    


    
app.get('/productosRandom', async(req,res) => {
    let idProductoBuscado = await nuevoContenedor.randomProducts();
    let productoRandom = await nuevoContenedor.getById(idProductoBuscado);
        res.send(productoRandom);
    
});


app.on('error', (error)=> console.log(`Error en el servidor ${error}`));
app.listen(PORT);