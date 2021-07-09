"use strict";
// import express, { Request, Response, NextFunction } from 'express';
// import Growdever from '../growdever';
// import Recado from '../recado';
// import { growdevers } from '../index';
// import { globalToken } from '../index';
// export async function validarParametros(request: Request, response: Response, next: NextFunction) {
//     const { username, password } = request.body;
//     if(!username || !password) {
//         return response.json({
//             mensagem: 'Dados inválidos!'
//         }).status(400);
//     }
//     next();
// }
// export async function encontrarGrowdever(request: Request, response: Response, next: NextFunction) {
//     const { username } = request.params;
//     const growdever = growdevers.find((growdever: any) => growdever.username == username)
//     if (!growdever) {
//         return response.json({
//             mensagem: 'Growdever não encontrado!'
//         }).status(404);
//     }
//     next();
// }
// export async function validarToken(request: Request, response: Response, next: NextFunction) {
//     const { token } = request.query;
//     if (!token || token !== globalToken) {
//         return response.json({
//             mensagem: 'Token inválido.'
//         }).status(401);
//     }
//     next();
// }
// export async function validarUsername(request: Request, response: Response, next: NextFunction) {
//     const { username } = request.params;
//     if (!username) {
//         return response.json({
//             mensagem: 'Precisamos de um Username para começar =('
//         }).status(400);
//     }
//     next();
// }
// export async function validarIdRecado(request: Request, response: Response, next: NextFunction) {
// }
