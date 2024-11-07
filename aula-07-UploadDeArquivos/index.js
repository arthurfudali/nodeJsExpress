import express from "express";
import multer from "multer";
const app = express();
import connection from "./config/sequelize-config.js";
app.use(express.static('public'));
app.set('view engine', 'ejs');

const upload = multer({dest: "public/uploads/"});
app.get("/", (req,res)=>{
    res.render("index");
});

app.post("/upload", upload.single("file"), (req,res)=>{
    res.redirect("/");
});

const port = 8081;
app.listen(port, (error)=>{
    if(error){
        console.log("Ocorreu um erro: "+ error)
    }else{
        console.log("Servidor iniciado em: http://localhost:"+port);
    }
});