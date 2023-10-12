import clienteModel from '../models/clienteModel.js';

async function getAllCliente (req, res) {
    try {
        const clientes = await clienteModel.getAllCliente();
        return res.status(200).json(clientes);
    }
    catch (error) {
        res.status(400).json(error);
    }
}

async function getUniqueCliente (req, res) {
    try {
        const cliente = await clienteModel.getUniqueCliente(req.params);
        return res.status(200).json(cliente);
    } catch (error) {
        res.status(404).json(error);
    }
}

async function createCliente (req, res) {
    try {
        const cliente = await clienteModel.createCliente(req.body);
        return res.status(200).send(`${cliente} criado com sucesso`);
    }
    catch (error) {
        res.status(400).json(error);
    }
}

async function updateCliente (req, res) {
    try {
        const cliente = await clienteModel.updateCliente(req.body, req.params);
        return res.status(200).send(`Cliente ${cliente} alterado com sucesso`);
    }
    catch (error) {
        res.status(400).json(error);
    }
}

async function deleteCliente (req, res) {
    try {
        await clienteModel.deleteCliente(req.body);
        return res.status(200).send('Cliente deleteado');
    }
    catch (error) {
        res.status(400).json(error);
    }
}

export default {
    getAllCliente,
    getUniqueCliente,
    createCliente,
    updateCliente,
    deleteCliente
};