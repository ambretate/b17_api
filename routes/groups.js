import { Router } from "express";
import * as controllers from "../controllers/groups.js";

const router = Router();

router.get("/", controllers.getGroups);
router.get("/:id", controllers.getGroup);
router.post("/", controllers.createGroup);
router.put("/:id", controllers.updateGroup);
router.delete("/:id", controllers.deleteGroup);

export default router;
