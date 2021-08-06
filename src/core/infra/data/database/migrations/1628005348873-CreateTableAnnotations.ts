import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableAnottations1625759889067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'anottations',
            columns: [
                {
                    name: 'uid',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '100',
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: 'description',
                    type: 'varchar',
                    length: '150',
                    isNullable: false
                },
                {
                    name: 'user_uid',
                    type: 'uuid',
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
            ],
            foreignKeys: [
                new TableForeignKey({
                    columnNames: ['user_uid'],
                    referencedColumnNames: ['uid'],
                    referencedTableName: 'users',
                    name: 'anottations_users'
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('anottations', true, true, true);
    }

}
