const fs = require('fs');

module.exports = {
  PORT: process.env.PORT || 4000,
  VERSION: process.env.VERSION || 'v1',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_NAME: process.env.DB_NAME || '',
  PRIVATE_KEY: process.env.PRIVATE_KEY || '',
  PUBLIC_KEY: process.env.PUBLIC_KEY || '',
};
