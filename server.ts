import express, { Application } from "express";
import morgan from "morgan";
import router from "./src/routes/index";

const server: Application = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(router);

export default server;
