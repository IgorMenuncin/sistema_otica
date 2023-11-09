import usuariosModel from '../models/usuariosModel.js';
import validaErros from '../auxiliars/validacaoErrors.js';

async function getAllUsuarios (req, res) {
    try {
        const usuarios = await usuariosModel.getAllUsuarios();
        return res.status(200).json(usuarios);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function getUniqueUsuarios (req, res) {
    try {
        const usuario = await usuariosModel.getUniqueUsuarios(req.params);
        return res.status(200).json(usuario);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function createUsuarios (req, res) {
    try {
        const usuario = await usuariosModel.createUsuarios(req.body);
        return res.status(200).json(usuario);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function updateUsuarios (req, res) {
    return null;
}

async function deleteUsuarios (req, res) {
    return null;
}

export default {
    getAllUsuarios,
    getUniqueUsuarios,
    createUsuarios,
    updateUsuarios,
    deleteUsuarios
};