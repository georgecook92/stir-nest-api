import { Column, Entity, JoinColumn, OneToMany, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { EntityPrefix } from '../../../common/enums/entity-prefix/entity-prefix.enum';
import { TableName } from '../../../common/enums/table-name/table-name.enum';
import { BaseEntity } from '../../../common/entity/base-entity/base-entity';

@Entity(TableName.USER)
export class UserEntity extends BaseEntity {
  constructor() {
    super(EntityPrefix.USER);
  }
  @Column({ name: 'first_name', nullable: false })
  public firstName: string;

  @Column({ name: 'last_name', nullable: false })
  public lastName: string;

  @Column({ unique: true, nullable: false })
  public email: string;

  @Column({ nullable: false })
  public password: string;

  @Column({ type: 'jsonb', nullable: true })
  public details?: {};

  @Column({ nullable: false })
  public admin: boolean;

  @CreateDateColumn({ name: 'created_at' })
  public createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt: Date;
}
