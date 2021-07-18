import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableAnottations1625759889067 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'anottation',
            columns: [
                {
                    name: 'uid',
                    type: 'uuid',
                    isPrimary: true,
                    isNullable: false
                },
                {
                    name: 'title',
                    type: 'varchar',
                    length: '50',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'varchar',
                    length: '150',
                    isNullable: false
                },
                {
                    name: 'uid_user',
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
                    columnNames: ['uid_user'],
                    referencedColumnNames: ['uid'],
                    referencedTableName: 'users'
                })
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('anottations', true, true, true);
    }

}