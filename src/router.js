import express from 'express';
import clienteController from './controllers/clienteController.js';

const router = express.Router();

router.get('/clientes', clienteController.getAllCliente);
router.get('/clientes/:id', clienteController.getUniqueCliente);
router.post('/clientes', clienteController.createCliente);
router.put('/clientes/:id', clienteController.updateCliente);
router.delete('/clientes/:id', clienteController.deleteCliente);

export default router;