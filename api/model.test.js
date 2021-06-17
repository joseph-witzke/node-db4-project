const db = require('../data/db-config');
const Recipe = require('./model');

test('sanity', () => {
  expect(process.env.DB_ENV).toBe('testing');
});

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db('recipes').truncate();
  await db.seed.run();
});
afterAll(async () => {
  await db.destroy();
});

describe('model', () => {
  describe('getAll', () => {
    test('returns all recipes in db', async () => {
      const data = await Recipe.getAll();
      expect(data).toHaveLength(2);
    });
  });
});
