import { Router } from "express";
import { validateContact } from "../middleware/validate.js";
import { sendContact } from "../controllers/contact.js";

const router = Router();
router.post("/", validateContact, sendContact);

export default router;
