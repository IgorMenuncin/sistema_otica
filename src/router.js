import express from 'express';
import clientesController from './controllers/clientesController.js';
import receitasController from './controllers/receitasController.js';
import usuariosController from './controllers/usuariosController.js';

const router = express.Router();

router.get('/clientes', clientesController.getAllClientes);
router.get('/clientes/:id', clientesController.getUniqueClientes);
router.post('/clientes', clientesController.createClientes);
router.put('/clientes/:id', clientesController.updateClientes);
router.delete('/clientes/:id', clientesController.deleteClientes);

router.get('/receitas', receitasController.getAllReceitas);
router.get('/receitas/:id', receitasController.getUniqueReceitas);
router.post('/receitas', receitasController.createReceitas);
router.put('/receitas/:id', receitasController.updateReceitas);
router.delete('/receitas/:id', receitasController.deleteReceitas);

router.get('/usuarios', usuariosController.getAllUsuarios);
router.get('/usuarios/:id', usuariosController.getUniqueUsuarios);
router.post('/usuarios', usuariosController.createUsuarios);
router.put('/usuarios/:id', usuariosController.updateUsuarios);
router.delete('/usuarios/:id', usuariosController.deleteUsuarios);

export default router;