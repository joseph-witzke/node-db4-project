const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  seeds: { directory: './data/seeds' },
  pool: {
    afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/recipes.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};

// module.exports = {
//   development: {
//     client: 'sqlite3',
//     useNullAsDefault: true, // needed for sqlite
//     connection: {
//       filename: './data/recipes.db3',
//     },
//     migrations: {
//       directory: './data/migrations',
//     },
//     seeds: {
//       directory: './data/seeds',
//     },
//     pool: {
//       // needed to enable foreign keys in sqlite
//       afterCreate: (conn, done) => {
//         // runs after a connection is made to the sqlite engine
//         conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
//       },
//     },
//   },
//   testing: {

//   }
// };
