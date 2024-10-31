import express from "express";
const router = express.Router();
// importando o model de Cliente
import Cliente from "../models/Cliente.js";

// importando o middlware auth
import Auth from "../middleware/Auth.js";

// ROTA CLIENTES
router.get("/clientes", Auth, function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", Auth, function (req, res) {
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
router.get("/clientes/delete/:id", Auth, function (req, res) {
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

// ROTA DE EDICAO
router.get("/clientes/edit/:id", Auth, (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("clienteEdit", {
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE ALTERACAO
router.post("/clientes/update", Auth, (req, res) => {
  /* o ID vem pelo corpo do formulario, não pela rota */
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
      /* as colunas da esquerda são as colunas do BD, as colunas da direita são as variaveis */
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});
export default router;
