import { DataSource } from "typeorm";

import { Prestamos } from "../entity/Prestamos";

export default new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "appbanco",
  entities: [Prestamos],
  synchronize: true,
  logging: false
});