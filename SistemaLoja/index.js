const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req,res) =>{
    res.render("index");
});
app.get("/clientes", (req,res) =>{
    const clientes=[
        {
            nome: "Arthur",
            cpf: 12312312301,
            endereco: "Pariquera"
        },
        {
            nome: "Eric",
            cpf: 12312312302,
            endereco: "Registro"
        },
        {
            nome: "Amanda",
            cpf: 12312312303,
            endereco: "Sete Barras"
        },
        {
            nome: "Igor",
            cpf: 12312312304,
            endereco: "Registro"
        }
    ]
    res.render("clientes",{
        clientes:clientes
    });
});
app.get("/produtos", (req,res) =>{
    const produtos = [
        {
          produto: "Celular",
          preco: 2800,
          categoria: "Eletronicos"
        },
        {
          produto: "CPU",
          preco: 2000,
          categoria: "Hardware"
        },
        {
          produto: "Monitor",
          preco: 1500,
          categoria: "Periféricos"
        },
        {
          produto: "Headphone",
          preco: 1000,
          categoria: "Audio"
        },
      ];
      res.render("produtos", {
        produtos:produtos
      })

})
app.get("/pedidos", (req,res) =>{
    const pedidos = [
        {
          numeroPedido: 1,
          valor: 2000,
        },
        {
          numeroPedido: 2,
          valor: 1500,
        },
        {
          numeroPedido: 3,
          valor: 3000,
        },
        {
          numeroPedido: 4,
          valor: 10000,
        },
      ];
      res.render("pedidos", {
        pedidos:pedidos
      })
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