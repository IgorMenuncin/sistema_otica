import express from 'express';
import clientesController from './controllers/clientesController.js';
import receitasController from './controllers/receitasController.js';

const router = express.Router();

router.get('/clientes', clientesController.getAllClientes);
router.get('/clientes/:id', clientesController.getUniqueClientes);
router.post('/clientes', clientesController.createClientes);
router.put('/clientes/:id', clientesController.updateClientes);
router.delete('/clientes', clientesController.deleteClientes);

router.get('/receitas', receitasController.getAllReceitas);
router.get('/receitas/:id', receitasController.getUniqueReceitas);
router.post('/receitas', receitasController.createReceitas);
router.put('/receitas/:id', receitasController.updateReceitas);
router.delete('/receitas', receitasController.deleteReceitas);

export default router;