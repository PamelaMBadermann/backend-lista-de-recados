"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recados = exports.globalToken = exports.growdevers = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const middlewares = __importStar(require("./middleware/middlewares"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default());
dotenv_1.default.config();
// const usada para testes
exports.growdevers = [
    {
        username: 'pamidoida',
        password: '1234',
        recados: [],
    },
    {
        username: 'angusyoung',
        password: '4321',
        recados: [],
    }
];
exports.globalToken = ';';
app.get('/growdevers', (request, response) => {
    return response.json(exports.growdevers);
});
app.get('/growdevers/:username', middlewares.validarUsername, middlewares.encontrarGrowdever, (request, response) => {
    const { username } = request.params;
    const growdever = exports.growdevers.find((growdever) => growdever.username == username);
    return response.json(growdever);
});
app.put('/growdevers/:username', middlewares.validarUsername, (request, response) => {
    const { username } = request.params;
    const { nome, idade, turma, cidade } = request.body;
    const index = exports.growdevers.findIndex((growdever) => growdever.username == username);
    if (index < 0) {
        return response.json({
            mensagem: 'Growdever não encontrado!'
        }).status(404);
    }
    exports.growdevers[index] = {
        username,
        nome,
        idade,
        turma,
        cidade
    };
    return response.json(exports.growdevers[index]);
});
app.post('/growdevers', [middlewares.validarParametros, middlewares.validarToken], (request, response) => {
    const { username, password } = request.body;
    if (username === exports.growdevers.username && password === username.password) {
        exports.globalToken = Math.random().toString(36).substring(2);
        return response.json({
            token: exports.globalToken
        });
    }
});
app.put('/growdevers/:username', middlewares.validarUsername, (request, response) => {
    const { username } = request.params;
    const { nome, idade, turma, cidade } = request.body;
    const index = exports.growdevers.findIndex((growdever) => growdever.username == username);
    if (index < 0) {
        return response.json({
            mensagem: 'Growdever não encontrado!'
        }).status(404);
    }
    exports.growdevers[index] = {
        username,
        nome,
        idade,
        turma,
        cidade
    };
    return response.json(exports.growdevers[index]);
});
app.get('/growdevers/:username', middlewares.validarUsername, (request, response) => {
    const { username } = request.params;
    return response.json({
        username: '',
        nome: '',
        idade: '',
        turma: '',
        cidade: '',
    });
});
app.delete('/growdevers/:username', middlewares.validarUsername, (request, response) => {
    const { username } = request.params;
    if (!username) {
        return response.json({
            mensagem: 'Username inválido'
        });
    }
    const index = exports.growdevers.findIndex((growdever) => growdever.username == username);
    exports.growdevers.splice(index, 1);
    return response.sendStatus(204);
});
// const usada para testes
exports.recados = [
    {
        username: 'pamidoida',
        password: '1234',
        recados: [
            {
                id: 1,
                descricao: 'lavar a mao',
                detalhamento: 'lavar com agua e sabao'
            },
            {
                id: 2,
                descricao: 'usar alcool gel',
                detalhamento: 'passar alcool gel nas mãos'
            },
        ]
    },
    {
        username: 'angusyoung',
        password: '4321',
        recados: [
            {
                id: 1,
                descricao: 'ir para creche',
                detalhamento: 'lets go party rock'
            },
            {
                id: 2,
                descricao: 'comer comer',
                detalhamento: 'é o melhor para poder crescer'
            },
        ]
    }
];
app.get('/growdevers/:username/recados', [middlewares.validarUsername, middlewares.validarToken], (request, response) => {
    const { username } = request.params;
    const { id } = request.body;
    const growdever = exports.growdevers.find((growdever) => growdever.username == username);
    // window.location.href('');
    return response.json(growdever.recados);
});
app.listen(process.env.PORT || 8080, () => {
    console.log('API rodando... ♥');
});
app.get('/:username/recados', (request, response) => {
    return response.send('Usuário com acesso');
});
