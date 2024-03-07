const express  = require('express');
const cors = require('cors');
const compression = require('compression');


module.exports = ({PersonRoutes}) =>  {
    const router = express.Router();
    const apiRouter = express.Router();

    apiRouter
       .use(cors())
       .use(express.urlencoded({extended: true}))
       .use(express.json())
       .use(compression())


    apiRouter.use('/persons', PersonRoutes)

    router.use('/api', apiRouter)

    return router
}