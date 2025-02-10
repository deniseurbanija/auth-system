"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const configDB_1 = __importDefault(require("./src/config/configDB"));
const server_1 = __importDefault(require("./server"));
const PORT = process.env.PORT || 3000;
(0, configDB_1.default)()
    .then((res) => {
    server_1.default.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
    .catch((error) => console.log("error en el servidor", error.message));
