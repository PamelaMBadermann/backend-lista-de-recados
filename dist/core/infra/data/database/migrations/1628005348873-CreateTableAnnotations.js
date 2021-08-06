"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableAnottations1625759889067 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableAnottations1625759889067 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                new typeorm_1.TableForeignKey({
                    columnNames: ['user_uid'],
                    referencedColumnNames: ['uid'],
                    referencedTableName: 'users',
                    name: 'anottations_users'
                })
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('anottations', true, true, true);
    }
}
exports.CreateTableAnottations1625759889067 = CreateTableAnottations1625759889067;
