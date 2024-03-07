const express = require('express')

class Server {
    constructor({config, router, SequelizeConnection}) {
        this._config = config;
        this._express = express();
        this._express.use(router)
        this._connect = SequelizeConnection;
    }

    start(){
        return this._express.listen(this._config.PORT, () =>{
            //this._connect.connection();
            console.log(`Server running on port ${this._config.PORT}`);
        });
    }
}

module.exports = Server;