import dotenv from 'dotenv';
dotenv.config();

import App from './index';
import gameRouter from './router/game';

const app = new App(Number(process.env.PORT!), process.env.MONGO_URL!, gameRouter);

app.listen(() => {
    console.log('Running');
});