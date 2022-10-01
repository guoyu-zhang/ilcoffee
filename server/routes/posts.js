import express from "express";

import { updateCafes, getCafes } from "../controllers/posts.js";

const router = express.Router();

router.get("/updateCafes", updateCafes);
router.get("/getCafes", getCafes);

export default router;
