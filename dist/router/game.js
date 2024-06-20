"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const game_controller_1 = require("../controller/game.controller");
const async_handler_1 = require("../utilities/async-handler");
const router = (0, express_1.Router)();
router
    .route('/submit')
    .post((0, async_handler_1.asyncHandler)(game_controller_1.GameController.submit));
router
    .route('/ranking')
    .get((0, async_handler_1.asyncHandler)(game_controller_1.GameController.getRanking));
exports.default = router;
