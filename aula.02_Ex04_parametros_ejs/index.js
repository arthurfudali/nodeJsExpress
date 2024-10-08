// Importar o express
const express = require("express"); //importação do tipo antiga, commonJS
// Criando uma instancia do express, nesse caso, sem usar o 'new'
const app = express();

//DEFININDO O EJS COMO RENDERIZADOR DE PAGINAS
app.set("view engine", "ejs");

// Criando a rota principal:
app.get("/", (req, res) => {
  res.render("index");
});

// Rota perfil
// :nome é um parametro obrigatorio
// para o parametro se tornar opcional é só adicionar uma ? no final
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  res.render("perfil", {
    nome: nome
  }); //usa a funcao render para mandar a pagina perfil para o EJS renderizar, nesse caso não precisa de extensão 
  
});

// Rota de video
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  res.render("videos", {
    playlist:playlist,
    video:video
  });
});

// ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["computador", "tablet", "celular", "notebook"];

  const produto = req.params.produto; //pega o produto que esta como parametro
  //passar var para a pagina
  res.render("produtos", {
    /* variavel que esta na pagina -> */ produto: produto /* <- variavel que esta no index */,
    listaProdutos: listaProdutos,
    /* na pagina produtos.ejs haverá uma testagem de condição (if) */
  });
});

//ROTA DE PEDIDOS
app.get("/pedidos", (req, res) => {
  // array de objetos com os pedidos
  const pedidos = [
    {
      produto: "Celular",
      valor: 3000,
    },
    {
      produto: "Computador",
      valor: 4000,
    },
    {
      produto: "Tablet",
      valor: 2000,
    },
    {
      produto: "Notebook",
      valor: 3800,
    }
  ];
  res.render("pedidos", {
    pedidos: pedidos
  });
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
