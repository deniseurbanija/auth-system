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
exports.deleteUserController = exports.getUserByIdController = exports.getUsersController = void 0;
const userService_1 = require("../services/userService");
// Controller to get all users
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, userService_1.getUsersService)();
        res.status(200).json(users);
    }
    catch (error) {
        console.log(error); //log the error
        res.status(500).json("Error finding users");
    }
});
exports.getUsersController = getUsersController;
// Controller to get one user by id
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield (0, userService_1.getUserByIdService)(userId);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json("Error finding user");
    }
});
exports.getUserByIdController = getUserByIdController;
// Controller to delete one use by id
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    try {
        const deletedUser = yield (0, userService_1.deleteUserService)(userId);
        res.status(200).send(deletedUser);
    }
    catch (error) {
        res.status(500).send("Error deleting user");
    }
});
exports.deleteUserController = deleteUserController;
