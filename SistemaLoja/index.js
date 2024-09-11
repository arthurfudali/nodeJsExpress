const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req,res) =>{
    res.render("index");
})


//iniciando o servidor
const port=8080;
app.listen(port, (error)=>{
    if (error) {
        console.log(`Ocorreu um erro: ${error}`);
      } else {
        console.log(`Servidor iniciado em: http://localhost:${port}`);
      }
})