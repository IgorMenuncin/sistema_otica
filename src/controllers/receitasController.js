import receitasModel from '../models/receitasModel.js';
import validaErros from '../auxiliars/validacaoErrors.js';

async function getAllReceitas (req, res) {
    try {
        const receitas = await receitasModel.getAllReceitas();
        return res.status(400).json(receitas);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function getUniqueReceitas (req, res) {
    try {
        const receita = await receitasModel.getUniqueReceitas(req.params);
        return res.status(400).json(receita);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function createReceitas (req, res) {
    try {
        const receita = await receitasModel.createReceitas(req.body);
        return res.status(400).json(receita);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function updateReceitas (req, res) {
    try {
        const receita = await receitasModel.updateReceitas(req.body, req.params);
        return res.status(400).json(receita);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

async function deleteReceitas (req, res) {
    try {
        const receita = await receitasModel.deleteReceitas(req.body);
        return res.status(400).json(receita);
    }
    catch (error) {
        const mensagemErro = validaErros(error);
        res.status(404).json(mensagemErro);
    }
}

export default {
    getAllReceitas,
    getUniqueReceitas,
    createReceitas,
    updateReceitas,
    deleteReceitas
};