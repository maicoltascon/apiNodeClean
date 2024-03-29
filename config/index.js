const dotenv = require('dotenv');
dotenv.config();

const PRODUCTION = require('./production');
const DEVELOPMENT = require('./develoment');
const QA = require('./qa');

const { NODE_ENV } = process.env;

let currentEnv = DEVELOPMENT;

if ( NODE_ENV === 'production') currentEnv = PRODUCTION;    

if (NODE_ENV === 'qa') currentEnv = QA;

module.exports = currentEnv;
