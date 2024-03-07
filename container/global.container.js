const { asClass, asFunction, asValue, createContainer } = require("awilix");

// Server
const config = require("../config");
const StartUp = require("../api/start");
const Server = require("../api/server");

// Services
const { PersonService } = require("../services");

// Controllers
const { PersonController } = require('../api/controllers')
const container = createContainer();

// Routes
const router = require("../api/routes");
const PersonRoutes = require("../api/routes/person.routes");

// Connections

const SequelizeConnection = require("../connections/sequelize");

// Models

const PersonModel = require("../dal/models/person.model")

// repositories

const PersonRepository = require("../dal/repositories/person.repository");

container
  .register({
    config: asValue(config),
    server: asClass(Server).singleton(),
    app: asClass(StartUp).singleton(),
    
  })
  .register({
    PersonService: asClass(PersonService).singleton(),
  })
  .register({
    PersonController: asClass(PersonController).singleton()
  })
  .register({
    router: asFunction(router).singleton(),
    PersonRoutes: asFunction(PersonRoutes).singleton(),
  })
  .register({
    SequelizeConnection: asClass(SequelizeConnection).singleton()
  })
  .register({
    PersonRepository: asClass(PersonRepository).singleton()
  })
  .register({
    PersonModel: asFunction(PersonModel).singleton()
  })

module.exports = container;
