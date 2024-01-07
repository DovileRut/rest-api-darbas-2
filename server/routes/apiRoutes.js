import express from "express"
import * as controller from "../controllers/controller.js"

const router = express.Router()

router.get("/", controller.getRents)

router.get("/:id", controller.getRent)

router.post("/", controller.createRent)

router.put("/:id", controller.updateRent)

router.delete("/:id", controller.deleteRent)

export default router