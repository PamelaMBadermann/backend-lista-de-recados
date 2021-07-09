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
exports.Post = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const User_1 = require("./User");
let Post = class Post extends BaseEntity {
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
], Post.prototype, "uid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Post.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ name: 'uid_user' }),
    __metadata("design:type", String)
], Post.prototype, "userUID", void 0);
__decorate([
    typeorm_1.Column({ name: 'created_at' }),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Post.prototype, "updatedAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.posts),
    typeorm_1.JoinColumn({ name: 'uid_category', referencedColumnName: 'uid' }),
    __metadata("design:type", User_1.User)
], Post.prototype, "user", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Post.prototype, "beforeInsert", null);
__decorate([
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Post.prototype, "beforeUpdate", null);
Post = __decorate([
    typeorm_1.Entity({ name: 'users' }),
    __metadata("design:paramtypes", [String, String, String, String, Date,
        Date])
], Post);
exports.Post = Post;
