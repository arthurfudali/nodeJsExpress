function Auth(req, res, next){ // O next é usado quando eu preciso que o middleware passe o usuario para a proxima rota
    if(req.session.usuario != undefined){
        next()
    }else{
        res.render("login",{
            loggedOut: true
        });
    }

}
export default Auth;