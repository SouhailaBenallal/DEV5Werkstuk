module.exports = {
  config: {
      client: 'postgresql',
      connection: {
          host:'db',// write host:'db' if works with docker and 127.0.0.1 without docker
          database: 'dev_5',
          user: 'postgres',
          password: 'postgres'
      },
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          tableName: 'knex_migrations'
      }
  }
};