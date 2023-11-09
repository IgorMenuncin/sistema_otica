import clientesModel from '../models/clientesModel.js';
import validaErros from '../auxiliars/validacaoErrors.js';

async function getAllClientes (req, res) {
    try {
        const clientes = await clientesModel.getAllClientes();
        return res.status(200).json(clientes);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function getUniqueClientes (req, res) {
    try {
        const cliente = await clientesModel.getUniqueClientes(req.params);
        return res.status(200).json(cliente);
    } catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function createClientes (req, res) {
    try {
        const cliente = await clientesModel.createClientes(req.body);
        return res.status(200).send(cliente);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function updateClientes (req, res) {
    try {
        const cliente = await clientesModel.updateClientes(req.body, req.params);
        return res.status(200).send(cliente);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function deleteClientes (req, res) {
    try {
        const cliente = await clientesModel.deleteClientes(req.params);
        return res.status(200).send(cliente);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

export default {
    getAllClientes,
    getUniqueClientes,
    createClientes,
    updateClientes,
    deleteClientes
};