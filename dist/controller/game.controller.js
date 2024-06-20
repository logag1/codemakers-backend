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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameController = void 0;
const user_1 = require("../models/user");
const random_1 = require("../utilities/random");
var GameController;
(function (GameController) {
    function submit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { clickCount, nickname, studentId } = req.body;
            const user = yield user_1.Users.create({
                studentId: String(`${studentId}_${nickname}`),
                userId: (0, random_1.getRandomId)(),
                clickCount: Number(clickCount)
            });
            return res.status(200).json({ success: true });
        });
    }
    GameController.submit = submit;
    function getRanking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.Users.find({});
            return res.status(200).json({
                success: true,
                result: user
            });
        });
    }
    GameController.getRanking = getRanking;
})(GameController || (exports.GameController = GameController = {}));
