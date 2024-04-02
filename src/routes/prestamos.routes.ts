
import { Router } from "express";

import { prestamoController } from "../controller/prestamos.controller";
import { PrestamoRepository } from "../repositories/prestamos.repository";

const router = Router();

const controller = new prestamoController(
  new PrestamoRepository()
);

router.post("/prestamos", controller.create.bind(controller));

router.get("/prestamos", controller.list.bind(controller));

router.get("/prestamos/:prestamoId", controller.get.bind(controller));

router.put("/prestamos/:prestamoId", controller.update.bind(controller));

router.delete("/prestamos/:prestamoId", controller.remove.bind(controller));

export default router;
