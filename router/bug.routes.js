import { Router } from "express";
const router = Router()
import { bugMiddlewares } from "../middlewares/bugMiddleware.js";
import { addBug, getBug } from '../controllers/bug.controller.js'

router.get('/bugs', getBug).use((req, res) => res.status(405).json({ msg: 'Method not allowed' }))
router.post('/bug', [...bugMiddlewares], addBug)

export default router;
