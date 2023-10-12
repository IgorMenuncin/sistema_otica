import express from 'express';
import clienteController from './controllers/clienteController.js';
import receitasController from './controllers/receitasController.js';

const router = express.Router();

router.get('/clientes', clienteController.getAllCliente);
router.get('/clientes/:id', clienteController.getUniqueCliente);
router.post('/clientes', clienteController.createCliente);
router.put('/clientes/:id', clienteController.updateCliente);
router.delete('/clientes', clienteController.deleteCliente);

router.get('/receitas', receitasController.getAllReceitas);
router.get('/receitas/:id', receitasController.getUniqueReceitas);
router.post('/receitas', receitasController.createReceitas);
router.put('/receitas/:id', receitasController.updateReceitas);
router.delete('/receitas', receitasController.deleteReceitas);

export default router;