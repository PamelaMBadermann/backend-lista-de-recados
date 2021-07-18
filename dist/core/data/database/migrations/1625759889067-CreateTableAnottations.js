"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableAnottations1625759889067 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableAnottations1625759889067 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                new typeorm_1.TableForeignKey({
                    columnNames: ['uid_user'],
                    referencedColumnNames: ['uid'],
                    referencedTableName: 'users'
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('anottations', true, true, true);
    }
}
exports.CreateTableAnottations1625759889067 = CreateTableAnottations1625759889067;
