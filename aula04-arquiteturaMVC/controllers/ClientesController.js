import express from 'express';
const router = express.Router(); //carrega apenas a biblioteca Router do express, não ele inteiro.

// Rota de clientes:
router.get("/clientes", (req, res)=> {
    const clientes =[
        {
            nome: "Arthur",
            cpf: "123.123.123-12",
            endereco: "rua das andorinhas - jardim hatori, Registro - SP",
        },
        {
            nome: "Arthur",
            cpf: "123.123.123-12",
            endereco: "rua das andorinhas - jardim hatori, Registro - SP",
        },
        {
            nome: "Arthur",
            cpf: "123.123.123-12",
            endereco: "rua das andorinhas - jardim hatori, Registro - SP",
        },
        {
            nome: "Arthur",
            cpf: "123.123.123-12",
            endereco: "rua das andorinhas - jardim hatori, Registro - SP",
        }
    ]
    res.render("clientes", {
        clientes: clientes
    })
})
export default router; 