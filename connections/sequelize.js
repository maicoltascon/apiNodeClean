
const { Sequelize } = require('sequelize');

class SequelizeConnection {

    constructor({config}) {
        this._config = config.DB; 
        this._connecttion = {}; 
    }

    connection() {
        const connect = new Sequelize(this._config.DATABASE, this._config.USER, this._config.PASSWORD, {
            host: this._config.HOST,
            dialect: this._config.DIALECT, 
        });

        return connect
    }
}



module.exports = SequelizeConnection;