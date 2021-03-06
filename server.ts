import express from "express";
import chalk from "chalk";
import apiRouter from "./api/routers";
import bodyParser from "body-parser";
import cors from 'cors';
import { version } from "./package.json";

const { log } = console;

const server = express();
const apiVer = version.split(".")[0];
server.use(cors());
server.disable("x-powered-by");
server.set("views", __dirname + "/views");
server.set("view engine", "pug");
server.use(bodyParser.json({ limit: "1mb" }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(`/apiV${apiVer}`, apiRouter);

server.listen(5555, () => {
  log(chalk.green(`apiV${apiVer} start`));
});
