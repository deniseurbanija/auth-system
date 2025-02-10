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
exports.loginService = exports.registerService = void 0;
const User_1 = __importDefault(require("../models/User"));
const generateToken_1 = require("../utils/generateToken");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
/**
 * Service to register a new user
 * @param userData User data to register
 * @returns Newly registered user
 */
const registerService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = userData;
    const newUser = yield User_1.default.create({ username: username, password: password });
    return newUser;
});
exports.registerService = registerService;
/**
 * Service to authenticate a user
 * @param userData User data for login
 * @returns JWT token if authentication is successful
 */
const loginService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = userData;
    const foundUser = yield User_1.default.findOne({ username });
    if (!foundUser)
        throw new Error("Incorrect username or password");
    const compare = yield bcryptjs_1.default.compare(password, foundUser.password);
    if (!compare) {
        throw new Error("Incorrect password");
    }
    else {
        const token = (0, generateToken_1.generateToken)({ username: foundUser.username });
        return token;
    }
});
exports.loginService = loginService;
