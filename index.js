const container = require('./container/global.container');

const application = container.resolve('app');

application.start().catch((err) => console.log(err));
