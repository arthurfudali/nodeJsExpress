// Importar o express
//importação do tipo antiga, commonJS
//const express = require("express"); 

//importaçao do tipo es6 modules (necessario fazer alteracao no package.json -> adicionar a linha: 'type: "module"')
import express from "express";

// Criando uma instancia do express, nesse caso, sem usar o 'new'
const app = express();

// Importando os Controllers:
import ClientesController from './controllers/ClientesController.js';
//import PedidosController from './controllers/PedidosController.js';
//import ProdutosController from './controllers/ProdutosController.js';


//DEFININDO O EJS COMO RENDERIZADOR DE PAGINAS
app.set("view engine", "ejs");

// DEFININDO A PASTA DOS ARQUIVOS ESTATICOS (PUBLIC)
app.use(express.static("public"));

// Definindo o uso das rotas do Controllers:
// a '/' é utilizada para indicar o uso de todas as rotas dentro daquele controller, é como se fosse um * 
app.use("/", ClientesController);
// app.use("/", PedidosController);
// app.use("/", ProdutosController);


// Criando a rota principal:
app.get("/", (req, res) => {
  res.render("index");
});
// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado em: http://localhost:${port}`);
  }
});
