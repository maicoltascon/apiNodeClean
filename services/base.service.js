class BaseService {
  constructor(Repository) {
    this._repository = Repository;
  }

  async findAll() {
    return await this._repository.findAll();
  }
}

module.exports = BaseService;
