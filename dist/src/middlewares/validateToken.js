"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const secret = process.env.SECRET;
const validateToken = (req, res, next) => {
    const token = req.header("authorization") || req.query.token;
    if (!token)
        res.status(403).send("Access denied");
    jsonwebtoken_1.default.verify(token, secret, (error) => {
        if (error) {
            res.status(401).send("Access denied: token expired or incorrect");
        }
        else {
            next();
        }
    });
};
exports.default = validateToken;
