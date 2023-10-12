import clienteModel from '../models/clienteModel.js';
import validaErros from '../auxiliars/validacaoErrors.js';

async function getAllCliente (req, res) {
    try {
        const clientes = await clienteModel.getAllCliente();
        return res.status(200).json(clientes);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function getUniqueCliente (req, res) {
    try {
        const cliente = await clienteModel.getUniqueCliente(req.params);
        return res.status(200).json(cliente);
    } catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function createCliente (req, res) {
    try {
        const cliente = await clienteModel.createCliente(req.body);
        return res.status(200).send(cliente);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function updateCliente (req, res) {
    try {
        const cliente = await clienteModel.updateCliente(req.body, req.params);
        return res.status(200).send(cliente);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function deleteCliente (req, res) {
    try {
        const cliente = await clienteModel.deleteCliente(req.body);
        return res.status(200).send(cliente);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

export default {
    getAllCliente,
    getUniqueCliente,
    createCliente,
    updateCliente,
    deleteCliente
};