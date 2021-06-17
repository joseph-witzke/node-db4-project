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
  describe('getById', () => {
    test('returns the recipe by the given id', async () => {
      const bread = await Recipe.getById(1);
      expect(bread).toMatchObject({
        recipe_id: 1,
        recipe_name: 'Artisan Bread',
      });
    });
  });
  describe('insert', () => {
    test('returns the inserted row', async () => {
      const input = { recipe_name: 'chili' };
      const chili = await Recipe.insert(input);
      expect(chili).toContain({ recipe_id: 3, recipe_name: 'chili' });
    });
  });
});
