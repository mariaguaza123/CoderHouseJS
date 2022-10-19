const fs = require('fs');
const path = require('path');
const nombreArchivo = 'src/Productos.json';

module.exports = class Contenedor {
    
    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    }

    readProducts = async() => {
        const listaProductos = await fs.promises.readFile(nombreArchivo, 'utf-8');
        return JSON.parse(listaProductos);
    } 

    
    getAllProducts = async() => {
        const products = await this.readProducts();
        return new Promise((res,rej) =>{
            if(products != null){
                 res(products);
            }else{
                 rej(console.log('El archivo es nulo'));
            }
        })
        
    }

    randomProducts = async() => {
        const leeProductos = await this.readProducts();
        const productos = leeProductos.map((producto) => producto);
        let randomProducto = Math.floor(Math.random() * productos.length);
        console.log(randomProducto);
        return randomProducto;
    }
        
    

    getById =  async(id)=> {
        const products = await this.readProducts();
        return new Promise((res, rej)=>{
            if(products != null && id != null){
               const produtoEncontrado = products.findIndex((unProducto) => unProducto.id === id);
               if(produtoEncontrado < 0){
                throw new Error('El producto no existe');
              }
               res(products[produtoEncontrado]);
              
            }else{
              rej('Error no se encontro el Id');
            }
        })
    }
   




}


