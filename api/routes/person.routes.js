const { Router } = require('express')

module.exports = ({PersonController}) => {
    const router = Router();
    router.get('/', PersonController.findAll.bind(PersonController));
    router.get('/:name', PersonController.findByName.bind(PersonController));
    return router;
}
