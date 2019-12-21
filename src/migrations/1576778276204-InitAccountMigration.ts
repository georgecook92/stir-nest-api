import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitAccount1576778276204 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'user_type',
        columns: [
          {
            name: 'id',
            type: 'text',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'text',
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'NOW()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'text',
            isPrimary: true,
          },
          {
            name: 'user_type_id',
            type: 'text',
          },
          {
            name: 'first_name',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'last_name',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'text',
            isUnique: false,
          },
          {
            name: 'details',
            type: 'jsonb',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'NOW()',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['user_type_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'user_type',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user');
    await queryRunner.dropTable('user_type');
  }
}
