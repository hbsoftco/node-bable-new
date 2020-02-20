module.exports = {
  development: {
      username: 'root',
      password: '1',
      database: 'node_babel',
      host: process.env.DB_HOST,
      dialect: 'mariadb',
      dialectOptions: {
          timezone: 'Etc/GMT0',
      },
  },
  test: {
      username: process.env.CI_DB_USERNAME,
      password: process.env.CI_DB_PASSWORD,
      database: process.env.CI_DB_NAME,
      host: process.env.CI_DB_HOSTNAME,
      dialect: process.env.DB_CONNECTION
  },
  production: {
      username: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
      host: process.env.PROD_DB_HOSTNAME,
      dialect: process.env.DB_CONNECTION
  }
};