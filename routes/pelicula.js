import {Router} from "express"
import {personaGet} from "../controllers/pelicula.js"
const router = new Router()

router.get('/',personaGet)

export default router