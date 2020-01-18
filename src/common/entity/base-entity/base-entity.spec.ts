import { BaseEntity } from './base-entity';

describe('BaseEntity', () => {
  class MockEntity extends BaseEntity {
    constructor() {
      super('test_');
    }
  }

  it('should attach the correct prefix to the entity', () => {
    const mockEntity = new MockEntity();
    expect(mockEntity).toMatchSnapshot();
  });
});
