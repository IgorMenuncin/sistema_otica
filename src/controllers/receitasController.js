import receitasModel from '../models/receitasModel.js';

async function getAllReceitas (req, res) {
    try {
        const receitas = await receitasModel.getAllReceitas();
        return res.status(400).json(receitas);
    }
    catch (error) {
        res.status(400).json(error);
    }
}

async function getUniqueReceitas (req, res) {
    try {
        const receita = await receitasModel.getUniqueReceitas(req.params);
        return res.status(400).json(receita);
    }
    catch (error) {
        res.status(400).json(error);
    }
}

async function createReceitas (req, res) {
    try {
        const receita = await receitasModel.createReceitas(req.body);
        return res.status(400).json(receita);
    }
    catch (error) {
        res.status(400).json(error);
    }
}

async function updateReceitas (req, res) {
    try {
        const receita = await receitasModel.updateReceitas(req.body, req.params);
        return res.status(400).json(receita);
    }
    catch (error) {
        res.status(400).json(error);
    }
}

async function deleteReceitas (req, res) {
    try {
        const receita = await receitasModel.deleteReceitas(req.body);
        return res.status(400).json(receita);
    }
    catch (error) {
        res.status(400).json(error);
    }
}

export default {
    getAllReceitas,
    getUniqueReceitas,
    createReceitas,
    updateReceitas,
    deleteReceitas
};