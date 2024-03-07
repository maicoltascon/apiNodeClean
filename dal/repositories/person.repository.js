
class PersonRepository {

    constructor({PersonModel}){
        this._personModel = PersonModel
    }

    async findAll(){
        try {
            const persons = await this._personModel.findAll();
            return persons;
        } catch (error) {
            console.log(error);
        }
    }
    async findByName(name){
        try {
            const persons = await this._personModel.findByName(name);
            return persons;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = PersonRepository

