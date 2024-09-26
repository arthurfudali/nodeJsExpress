// ORM - Sequelize
import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Cliente = connection.define('clientes', {
    nome: {
        type: Sequelize.STRING, 
        allowNull: false,
    },
    cpf: {
        type: Sequelize.STRING, 
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING, 
        allowNull: false,
    }
});
Cliente.sync({force: false}) // não forca a criação da tabela caso ja exista
export default Cliente;