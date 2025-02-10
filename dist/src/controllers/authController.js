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
exports.loginController = exports.registerController = void 0;
const authService_1 = require("../services/authService");
// Controller to register a new user
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        const newUser = yield (0, authService_1.registerService)(userData);
        res.status(201).json(newUser);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json("Error registering new user " + error.message);
            // This type of checking within the catch block is crucial to ensure we are
            // handling the error correctly and not encountering any unexpected issues.
        }
    }
});
exports.registerController = registerController;
// Controller to login/ authenticate user
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    try {
        const token = yield (0, authService_1.loginService)(userData);
        res
            .header("authorization", token)
            .json({ message: "Authenticated", token: token });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(401).json("Incorrect password or username " + error.message);
        }
    }
});
exports.loginController = loginController;
