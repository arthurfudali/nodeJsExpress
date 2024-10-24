import express from "express";
import Usuario from "../models/Usuario.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});
router.post("/createUser", (req, res) => {
  const { email, senha } = req.body;

  Usuario.findOne({ where: { email: email } }).then((usuario) => {

    //se não houver
    if (usuario == undefined) {
      const salt = bcrypt.genSaltSync(10); //o salt é uma chave que o bcrypt usa para modificar a criptografia e tornar ela unica
      const hash = bcrypt.hashSync(senha, salt);
      Usuario.create({
        email: email,
        senha: hash,
      }).then(() => {
        res.redirect("/login");
      });
    }else{ //caso o usuario ja esteja cadastrado
        res.send( `Usuario já cadastrado. <br> <a href='/login'> Faça o login!</a>`)
    }
  });
});

// ROTA DE AUTENTICACAO
router.post("/authenticate", (req, res) => {
  const { email, senha } = req.body;
  //verificar se o usuario esta cadastrado

  Usuario.findOne({
    where: {
      email: email,
    },
  }).then((usuario) => {
    if (usuario != undefined) {
        // valida a senha
        const correct = bcrypt.compareSync(senha, usuario.senha); //retorna um boolean
        // se a senha for válida
        if(correct){
            //autoriza o login
            res.redirect("/");
        }else{ // caso a senha esteja errada
            res.send(`Senha inválida!<br><a href='/login'>Tente novamente.</a>`)
        }
    } else {
      res.send(
        `Usuario não cadastrado. <br> <a href='/cadastro'> Tente novamente!</a>`
      );
    }
  });
});
export default router;
