import express from "express";
const router = express.Router();
// importando o model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", function (req, res) {
  // Recebendo os dados do form e gravando nas variaveis
  const nome = req.body.nome; //nome nesse caso é o 'name' do formulario
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    //coluna a ser gravada: variavel
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE DELETE
// Recebe o ID como parametro
router.get("/clientes/delete/:id", function (req, res) {
  // Coletar o id que veio na URL
  const id = req.params.id;
  // exclusão
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;
