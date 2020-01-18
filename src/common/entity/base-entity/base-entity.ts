import { BeforeInsert, PrimaryColumn } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { generateId } from '../../utils/generate-id/generate-id';
import { EntityWithId } from '../interfaces/entity-with-id.interface';

const ENTITY_ID_LENGTH = 16;

@Injectable()
export abstract class BaseEntity implements EntityWithId {
  constructor(private readonly entityPrefix: string) {}

  @PrimaryColumn()
  public id: string;

  @BeforeInsert()
  public async generateID(): Promise<void> {
    this.id = await generateId(this.entityPrefix, ENTITY_ID_LENGTH);
  }
}
