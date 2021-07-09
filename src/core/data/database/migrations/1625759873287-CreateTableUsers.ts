import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1625759873287 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'uid',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'username',
                    type: 'varchar',
                    length: '25',
                    isNullable: false
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '25',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    isNullable: false
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users', true, true, true)
    }

}
