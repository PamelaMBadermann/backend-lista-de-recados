import { Entity, BaseEntity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Anottation } from './Anottation';

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @PrimaryColumn()
    uid?: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({name: 'created_at'})
    createdAt?: Date;

    @Column({name: 'updated_at'})
    updatedAt?: Date;

    @OneToMany(type => Anottation, anottation => anottation.user)
    anottations?: Anottation[];

    constructor(
    username: string,
    password: string,
    uid?: string,
    createdAt?: Date,
    updatedAt?: Date
    ) {
        super();
        this.username = username;
        this.password = password;
        this.uid = uid;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    @BeforeInsert()
    private beforeInsert() {
        this.uid = this.uid ? this.uid : uuid();
        this.createdAt = this.createdAt ? this.createdAt : new Date(Date.now());
        this.updatedAt = this.updatedAt ? this.updatedAt : new Date(Date.now());
    }

    @BeforeUpdate()
    private beforeUpdate() {
        this.updatedAt = new Date(Date.now());
    }
}