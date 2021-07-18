"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Anottation = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const User_1 = require("./User");
let Anottation = class Anottation extends typeorm_1.BaseEntity {
    constructor(title, description, userUID, uid, createdAt, updatedAt) {
        super();
        this.title = title;
        this.description = description;
        this.userUID = userUID;
        this.uid = uid;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    beforeInsert() {
        this.uid = this.uid ? this.uid : uuid_1.v4();
        this.createdAt = this.createdAt ? this.createdAt : new Date(Date.now());
        this.updatedAt = this.updatedAt ? this.updatedAt : new Date(Date.now());
    }
    beforeUpdate() {
        this.updatedAt = new Date(Date.now());
    }
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", String)
], Anottation.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Anottation.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Anottation.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'uid_user' }),
    __metadata("design:type", String)
], Anottation.prototype, "userUID", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_at' }),
    __metadata("design:type", Date)
], Anottation.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Anottation.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.anottations),
    typeorm_1.JoinColumn({ name: 'uid_user', referencedColumnName: 'uid' }),
    __metadata("design:type", User_1.User)
], Anottation.prototype, "user", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Anottation.prototype, "beforeInsert", null);
__decorate([
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Anottation.prototype, "beforeUpdate", null);
Anottation = __decorate([
    typeorm_1.Entity({ name: 'anottations' }),
    __metadata("design:paramtypes", [String, String, String, String, Date,
        Date])
], Anottation);
exports.Anottation = Anottation;
