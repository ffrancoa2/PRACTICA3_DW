import express from 'express';
import * as usuariosController from '../controllers/usuariosController.js';

const router = express.Router();

router.get('/', usuariosController.getUsuarios);
router.post('/', usuariosController.postUsuario);
router.put('/:id', usuariosController.putUsuario);
router.delete('/:id', usuariosController.deleteUsuario);

export default router;
