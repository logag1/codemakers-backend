"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const index_1 = __importDefault(require("./index"));
const game_1 = __importDefault(require("./router/game"));
const app = new index_1.default(Number(process.env.PORT), process.env.MONGO_URL, game_1.default);
app.listen(() => {
    console.log('Running');
});
