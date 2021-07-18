import 'reflect-metadata';
import App from './core/presentation/App';
import dotenv from 'dotenv';

dotenv.config({
    path: '../.env'
});

const app = new App();
const port = process.env.PORT || 8080;

app.init().then(_ => app.start(port));