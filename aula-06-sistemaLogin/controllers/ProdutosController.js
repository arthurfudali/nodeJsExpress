import express from "express";
import Produto from "../models/Produto.js";
const router = express.Router();
import Auth from "../middleware/Auth.js";
// ROTA PRODUTOS
router.get("/produtos", Auth, (req, res) => {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});
router.post("/produtos/new", Auth, (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
  }).then(() => {
    res.redirect("/produtos");
  });
});
router.get("/produtos/delete/:id", Auth, (req, res) => {
  const id = req.params.id;
  Produto.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/produtos");
  });
});

export default router;
