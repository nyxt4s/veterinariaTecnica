const dotenv = require ("dotenv");
dotenv.config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD ,
  dbHost: process.env.DB_HOST ,
  dbName: process.env.DB_DATABASE ,
  dbPort: process.env.DB_PORT
};

module.exports = {
  config
}


