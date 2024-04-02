
import { Router } from "express";

import { TaskController } from "../controller/prestamos.controller";
import { TaskRepository } from "../repositories/prestamos.repository";

const router = Router();

const controller = new TaskController(
  new TaskRepository()
);

router.post("/prestamos", controller.create.bind(controller));

router.get("/prestamos", controller.list.bind(controller));

router.get("/prestamos/:prestamoId", controller.get.bind(controller));

router.put("/prestamos/:prestamoId", controller.update.bind(controller));

router.delete("/prestamos/:prestamoId", controller.remove.bind(controller));

export default router;
