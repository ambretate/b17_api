import { Router } from "express";
import * as controllers from "../controllers/b17s.js";

const router = Router();

router.get("/", controllers.getB17s);
router.get("/:id", controllers.getB17);
router.post("/", controllers.createB17);
router.put("/:id", controllers.updateB17);
router.delete("/:id", controllers.deleteB17);

export default router;
