"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomId = void 0;
function getRandomId() {
    return Math.random().toString(36).substr(2, 6);
}
exports.getRandomId = getRandomId;
