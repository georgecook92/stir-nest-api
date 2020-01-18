import { generateId } from './generate-id';

describe('generateId', () => {
  it('should generate successive, unique ids', async () => {
    const ids = [];

    for (let i = 0; i < 50; i++) {
      ids.push(await generateId('test', 16));
    }

    ids.forEach(id => {
      expect(typeof id).toEqual('string');
      expect(id).toMatch(/^test_/);
      expect(id.length).toEqual(21);
      expect(ids.filter(i => i === id).length).toEqual(1);
    });
  });
});
