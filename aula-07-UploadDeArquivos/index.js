import express from "express";
const app = express();
const port = 8081;
app.listen(port, (error)=>{
    if(error){
        console.log("Ocorreu um erro: "+ error)
    }else{
        console.log("Servidor iniciado em: http://localhost:"+port);
    }
});
