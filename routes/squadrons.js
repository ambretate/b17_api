import { Router } from "express";
import * as controllers from "../controllers/squadrons.js";

const router = Router();

router.get("/", controllers.getSquadrons);
router.get("/:id", controllers.getSquadron);
router.post("/", controllers.createSquadron);
router.put(":/id", controllers.updateSquadron);
router.delete("/:id", controllers.deleteSquadron);

export default router;
