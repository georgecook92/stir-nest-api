# BaseEntity

A typeorm base entity that provies a primary generated id column. You must call super with the desired entity prefix in the constructor.

### Example

```ts
import { BaseEntity } from './base-entity';

class MyEntity extends BaseEntity {
  constructor() {
    super('prefix_');
  }
}
```
