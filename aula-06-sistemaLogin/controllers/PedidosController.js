import express from "express";
import Pedido from "../models/Pedido.js";
const router = express.Router();
import Auth from "../middleware/Auth.js";

// ROTA PEDIDOS

router.get("/pedidos", Auth, (req, res) => {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

router.post("/pedidos/new", Auth, (req, res) => {
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.create({
    numero: numero,
    valor: valor,
  }).then(() => {
    res.redirect("/pedidos");
  });
});

router.get("/pedidos/delete/:id", Auth, (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/pedidos");
  });
});

router.get("/pedidos/edit/:id", Auth, (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id)
    .then((pedido) => {
      res.render("pedidoEdit", {
        pedido: pedido,
      });
    })
    .cathc((error) => {
      console.log(error);
    });
});

router.post("/pedidos/update", Auth, (req, res) => {
  const id = req.body.id;
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.update(
    {
      numero: numero,
      valor: valor,
    },
    { where: { id: id } }
  )
    .then(() => {
      res.redirect("/produtos");
    })
    .cathc((error) => {
      console.log(error);
    });
});
export default router;
