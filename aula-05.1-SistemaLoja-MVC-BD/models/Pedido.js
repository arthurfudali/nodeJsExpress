import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define('pedidos', {
    numero: {
        type: Sequelize.STRING,// alterar pra INTEGER depois
        allowNull: false
    },
    valor: {
        type: Sequelize.INTEGER, // alterar para FLOAT
        allowNull: false
    }
});
Pedido.sync({force: false});
export default Pedido;