
class PersonController {

    constructor({PersonService}) {
        this._personService = PersonService;
    }
    async findAll(req, res) {
        try {
            const persons = await this._personService.findAll();
            return res.json({
                data: persons,
                statusCode: 200,
                message: 'Success',
                error: false
            });

        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                message: error,
                error: true
            });
        }
        

     
    }

    async findByName(req, res) {
        const { params } = req;
        console.log(params);
        const persons = await this._personService.findByName(params.name);

        return res.json({
            data: persons,
            statusCode: 200,
            message: 'Success',
            error: false
        });
    }
}

module.exports = PersonController;