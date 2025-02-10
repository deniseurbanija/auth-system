"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateToken_1 = __importDefault(require("../middlewares/validateToken"));
const userController_1 = require("../controllers/userController");
const userRouter = (0, express_1.Router)();
userRouter.get("/", validateToken_1.default, userController_1.getUsersController);
userRouter.get("/:id", validateToken_1.default, userController_1.getUserByIdController);
userRouter.delete("/:id", validateToken_1.default, userController_1.deleteUserController);
exports.default = userRouter;
