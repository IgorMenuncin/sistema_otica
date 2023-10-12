import { prisma } from '../lib/prisma.js';
import { z } from 'zod';

async function getAllReceitas () {
    const receitas = await prisma.receitas.findMany();
    return receitas;
}

async function getUniqueReceitas (reqParams) {
    const idSchema = z.object({
        id: z.string().uuid()
    });
    const { id } = idSchema.parse(reqParams);
    const receita = await prisma.receitas.findUniqueOrThrow({
        where: {
            id: id
        }
    });
    return receita; 
}

async function createReceitas (reqBody) {
    const receitaSchema = z.object({
        id_cliente: z.string().uuid(),
        armacao: z.string(),
        lentes: z.string(),
        observacao: z.string(),
        medico: z.string(),
        otico: z.string(),
        data_consulta: z.string(),
        createdUser: z.string(),
        d_esf: z.string(),
        d_cil: z.string(),
        d_eixo: z.string(),
        d_add: z.string(),
        d_dnp: z.string(),
        e_esf: z.string(),
        e_cil: z.string(),
        e_eixo: z.string(),
        e_add: z.string(),
        e_dnp: z.string()
    });

    const { id_cliente, armacao, lentes, observacao, medico, otico, data_consulta, createdUser, d_esf, d_cil, d_eixo, d_add, d_dnp, e_esf, e_cil, e_eixo, e_add, e_dnp } = receitaSchema.parse(reqBody);

    await prisma.receitas.create({
        data: {
            id_cliente,
            armacao,
            lentes,
            observacao,
            medico,
            otico,
            data_consulta: new Date(data_consulta),
            createdUser,
            d_esf,
            d_cil,
            d_eixo,
            d_add,
            d_dnp,
            e_esf,
            e_cil,
            e_eixo,
            e_add,
            e_dnp
        }
    });

    return 'Receita criada com sucesso';
}

async function updateReceitas (reqBody, reqParams) {
    const idSchema = z.object({
        id: z.string().uuid()
    });
    const { id } = idSchema.parse(reqParams);
    
    const receitaSchema = z.object({
        id_cliente: z.string().uuid(),
        armacao: z.string(),
        lentes: z.string(),
        observacao: z.string(),
        medico: z.string(),
        otico: z.string(),
        data_consulta: z.string(),
        createdUser: z.string(),
        d_esf: z.string(),
        d_cil: z.string(),
        d_eixo: z.string(),
        d_add: z.string(),
        d_dnp: z.string(),
        e_esf: z.string(),
        e_cil: z.string(),
        e_eixo: z.string(),
        e_add: z.string(),
        e_dnp: z.string()
    });

    const { id_cliente, armacao, lentes, observacao, medico, otico, data_consulta, createdUser, d_esf, d_cil, d_eixo, d_add, d_dnp, e_esf, e_cil, e_eixo, e_add, e_dnp } = receitaSchema.parse(reqBody);
    
    await prisma.receitas.update({
        where: {
            id: id
        },
        data: {
            id_cliente,
            armacao,
            lentes,
            observacao,
            medico,
            otico,
            data_consulta: new Date(data_consulta),
            createdUser,
            d_esf,
            d_cil,
            d_eixo,
            d_add,
            d_dnp,
            e_esf,
            e_cil,
            e_eixo,
            e_add,
            e_dnp
        }
    });
    return 'Receita atualizada com sucesso';
}

async function deleteReceitas (reqBody) {
    const idSchema = z.object({
        id: z.string().uuid()
    });
    const { id } = idSchema.parse(reqBody);
    await prisma.receitas.delete({
        where: {
            id: id
        }
    });
    return 'Receita deletada com sucesso';
}

export default {
    getAllReceitas,
    getUniqueReceitas,
    createReceitas,
    updateReceitas,
    deleteReceitas
};