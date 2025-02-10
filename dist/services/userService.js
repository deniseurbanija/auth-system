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
exports.deleteUserService = exports.getUserByIdService = exports.getUsersService = void 0;
const User_1 = __importDefault(require("../models/User"));
/**
 * Service to get all users
 * @returns All users with their posts populated
 */
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User_1.default.find().populate("posts");
    return users;
});
exports.getUsersService = getUsersService;
/**
 * Service to get user by id
 * @param id user id to find it
 * @returns found user
 */
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUserById = yield User_1.default.findById(id);
    if (!foundUserById)
        throw new Error("User not found");
    return foundUserById;
});
exports.getUserByIdService = getUserByIdService;
/**
 * Service to delete one user
 * @param id user id to find it
 * @returns deleted user
 */
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield User_1.default.deleteOne({ _id: id });
    return deletedUser;
});
exports.deleteUserService = deleteUserService;
