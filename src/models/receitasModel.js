import { prisma } from '../lib/prisma';
import { z } from 'zod';

async function getAllReceitas () {
    const receitas = await prisma.receitas.findMany({});
    return receitas;
}

async function getUniqueReceitas (reqParams) {
    const { id } = reqParams;
    const receita = await prisma.receitas.findUniqueOrThrow({
        where: {
            id: id
        }
    });
    return receita; 
}

export default {
    getAllReceitas,
    getUniqueReceitas
};