import clienteModel from '../models/clienteModel.js';

async function getAllCliente (req, res) {
    const clientes = await clienteModel.getAllCliente();
    return res.status(200).json(clientes);
}

async function getUniqueCliente (req, res) {
    try {
        const cliente = await clienteModel.getUniqueCliente(req.params);
        return res.status(200).json(cliente);
    } catch (error) {
        res.status(404).json('Cliente não encontrado');
    }
}

async function createCliente (req, res) {
    try {
        const cliente = await clienteModel.createCliente(req.body);
        return res.status(200).send(`${cliente} criado com sucesso`);
    }
    catch (error) {
        res.status(400).send('Erro no tipo dos dados recebidos');
    }
}

async function updateCliente (req, res) {
    const cliente = await clienteModel.updateCliente(req.body, req.params);
    return res.status(200).send(`Cliente ${cliente} alterado com sucesso`);
}

async function deleteCliente (req, res) {
    await clienteModel.deleteCliente(req.params);
    return res.status(200).send('Cliente deleteado');
}

export default {
    getAllCliente,
    getUniqueCliente,
    createCliente,
    updateCliente,
    deleteCliente
};