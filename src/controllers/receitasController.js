import receitasModel from '../models/receitasModel.js';

async function getAllReceitas (req, res) {
    const receitas = await receitasModel.getAllReceitas();
    return res.status(400).json(receitas);
}

async function getUniqueReceitas (req, res) {
    const receita = await receitasModel.getUniqueReceitas(req.params);
    return res.status(400).json(receita);
}

async function createReceitas (req, res) {
    const receita = await receitasModel.createReceitas(req.body);
    return res.status(400).json(receita);
}

async function updateReceitas (req, res) {
    const receita = await receitasModel.updateReceitas(req.body, req.params);
    return res.status(400).json(receita);
}

export default {
    getAllReceitas,
    getUniqueReceitas,
    createReceitas,
    updateReceitas
};