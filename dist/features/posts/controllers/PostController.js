"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../../../core/data/database/entities/Post");
class PostController {
    async index(request, response) {
        try {
            const posts = await Post_1.Post.find();
            return response.send(posts);
        }
        catch (error) {
            console.log('ERRO AO ACESSAR POSTS', error);
        }
    }
    async show(request, response) {
        const { uid } = request.params;
        try {
            const post = await Post_1.Post.findOne(uid);
            return response.json(post);
        }
        catch (error) {
            console.log('ERRO AO PROCURAR POR PRODUTO', error);
        }
    }
    async store(request, response) {
        const { title, description, userUID } = request.body;
        try {
            const post = await new Post_1.Post(title, description, userUID).save();
            return response.send(post);
        }
        catch (error) {
            console.log('ERRO AO SALVAR PRODUTO', error);
        }
    }
    async update(request, response) {
        const { uid } = request.params;
        const { title, description, userUID } = request.body;
        try {
            const post = await Post_1.Post.findOne(uid);
            if (post) {
                post.title = title;
                post.description = description;
                post.userUID = userUID;
                post.save();
            }
            return response.json(post);
        }
        catch (error) {
            console.log('ERRO AO ATUALIZAR RECADO:', error);
        }
    }
    async delete(request, response) {
        const { uid } = request.params;
        try {
            await Post_1.Post.delete(uid);
            return response.sendStatus(204);
        }
        catch (error) {
            console.log('ERRO AO DELETAR PRODUTO', error);
        }
    }
}
exports.default = PostController;
