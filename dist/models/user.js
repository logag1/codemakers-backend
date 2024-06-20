"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
exports.Users = (0, mongoose_1.model)('users', new mongoose_1.Schema({
    studentId: {
        type: String,
        required: true
    },
    clickCount: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}));
