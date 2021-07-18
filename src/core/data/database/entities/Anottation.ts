import { Entity, BaseEntity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User"

@Entity({ name: 'anottations' })
export class Anottation extends BaseEntity {
    @PrimaryColumn()
    uid?: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ name: 'uid_user' })
    userUID: string;

    @Column({ name: 'created_at' })
    createdAt?: Date;

    @Column({ name: 'updated_at' })
    updatedAt?: Date;

    @ManyToOne(type => User, user => user.anottations)
    @JoinColumn({name: 'uid_user', referencedColumnName: 'uid'})
    user?: User;

    constructor(
    title: string,
    description: string,
    userUID: string,
    uid?: string,
    createdAt?: Date,
    updatedAt?:Date
        ) {
        super();
        this.title = title;
        this.description = description;
        this.userUID = userUID;
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