import {Router} from "express"
import {actorGet, actorPost, actorGetId,actorGetNombre, actorPut,actorDelete} from "../controllers/actor.js"
import {check} from "express-validator"
import { validarCampos } from "../middleware/validar_campos.js"
const router = new Router()


router.get('/',actorGet)
router.get('/id/:id',actorGetId)
router.get('/nombre',actorGetNombre)
router.post('/',[
    check('nombre', 'El nombre es obligatorio!').not().isEmpty(),
    check('foto', 'La foto es obligatorio').not().isEmpty(),
    check('biografia', 'La biografia es obligatorio').not().isEmpty(),
    validarCampos       
],actorPost)
router.put('/:id',actorPut)
router.delete('/:id',actorDelete)


export default router