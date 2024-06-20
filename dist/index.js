"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
/**
 * Express App 핸들링
 */
class App {
    constructor(_PORT, _mongoUrl, _gameRouter) {
        this._PORT = _PORT;
        this._mongoUrl = _mongoUrl;
        this._gameRouter = _gameRouter;
        this._app = (0, express_1.default)();
        this._setMiddleWares();
        this._mountRouter(this._gameRouter);
        this._connectMongoDB();
        mongoose_1.default.connection.on("open", () => __awaiter(this, void 0, void 0, function* () {
            console.log('Mongo DB ready');
        }));
    }
    listen(callback) {
        this._app.listen(this._PORT, callback);
    }
    _setMiddleWares() {
        this._app.use((0, cors_1.default)());
        this._app.use(express_1.default.json());
        this._app.use(express_1.default.urlencoded({ extended: true }));
        this._app.use(express_1.default.static(path_1.default.join(__dirname, '..', '..', 'react-front/build')));
    }
    _connectMongoDB() {
        mongoose_1.default.connect(this._mongoUrl);
    }
    _mountRouter(gameRouter) {
        this._app.use('/api', gameRouter);
        this._app.get('*', (req, res) => res.sendFile(path_1.default.join(__dirname, '..', '..', 'react-front/build/index.html')));
    }
}
exports.default = App;
