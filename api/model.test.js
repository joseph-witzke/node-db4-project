const db = require('../data/db-config');
const Recipe = require('./model');

test('sanity', () => {
  expect(process.env.DB_ENV).toBe('testing');
});
