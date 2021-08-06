import { Entity, BaseEntity, PrimaryColumn, Column, BeforeInsert, BeforeUpdate, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./user.entity"

@Entity({ name: 'anottations' })
export class AnottationEntity extends BaseEntity {
    @PrimaryColumn()
    uid!: string;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column({ name: 'user_uid' })
    userUID!: string;

    @Column({ name: 'created_at' })
    createdAt!: Date;

    @Column({ name: 'updated_at' })
    updatedAt!: Date;

    @ManyToOne(type => User, user => user.anottations)
    @JoinColumn({name: 'user_uid', referencedColumnName: 'uid'})
    user!: User;

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