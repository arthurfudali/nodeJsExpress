// Importar o express
const express = require("express"); //importação do tipo antiga, commonJS
// Criando uma instancia do express, nesse caso, sem usar o 'new'
const app = express();

// Criando a rota principal:
app.get("/", (req, res) => {
  res.send("<h1>Hello world! <br> tamojunto mané pprt</h1>");
});

// Rota perfil
// :nome é um parametro obrigatorio
// para o parametro se tornar opcional é só adicionar uma ? no final
app.get("/perfil/:nome?", (req, res) => {
  const nome = req.params.nome;
  //verifica se o nome existe
  if (nome) {
    res.send("Perfil do usuário: " + nome);
  } else {
    res.send("Faca login para acessar seu perfil!");
  }
});

// Rota de video
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  if (playlist && video == undefined) {
    res.send("Pagina de Videos:" + playlist);
  }
  if (playlist && video) {
    res.send("Voce esta na playlist: " + playlist + " e no video: " + video);
  }
  else{
    res.send("Pagina de videos")
  }
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado`);
  }
});
