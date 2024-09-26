import express from "express";
import Pedido from "../models/Pedido.js";
const router = express.Router();

// ROTA PEDIDOS

router.get("/pedidos", (req, res) => {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

router.post("/pedidos/new", (req,res)=>{
    const numero =req.body.numero;
    const valor =req.body.valor;
    Pedido.create({
        numero:numero,
        valor:valor
    }).then(()=>{
        res.redirect("/pedidos")
    })
})

router.get("/pedidos/delete/:id", (req,res)=>{
    const id = req.params.id;
    Pedido.destroy({
        where:{
            id:id
        }
    }).then(()=>{
        res.redirect("/pedidos")
    })
})
export default router;
