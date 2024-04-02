"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Prestamos_1 = require("../entity/Prestamos");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "appbanco",
    entities: [Prestamos_1.Prestamos],
    synchronize: true,
    logging: false
});
