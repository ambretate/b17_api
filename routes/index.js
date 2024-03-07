import { Router } from "express";
import b17Routes from "./b17s.js";
import groupRoutes from "./groups.js";
import squadronRoutes from "./squadrons.js";

const router = Router();

router.get("/", (request, response) =>
  response.send("Welcome to the B17 API route")
);

router.use("/b17s", b17Routes);
router.use("/bomb_groups", groupRoutes);
router.use("/bomb_squadrons", squadronRoutes);

export default router;