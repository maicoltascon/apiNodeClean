const BaseService = require('./base.service');

class PersonService extends BaseService {
    constructor({PersonRepository}) {
        super(PersonRepository);
        this._personRepository = PersonRepository
    }

    findByName(name){
        return this._personRepository.findByName(name)
    }

    
}

module.exports = PersonService;