import { prisma } from '../lib/prisma.js';
import { z } from 'zod';

async function getAllCliente () {
    const clientes = await prisma.clientes.findMany();
    return clientes;
}

async function getUniqueCliente (reqParams) {
    const { id } = reqParams;
    const cliente = await prisma.clientes.findUniqueOrThrow({
        where: {
            id: id
        }
    });
    return cliente;
}

async function createCliente (reqBody) {
    const clienteSchema = z.object({
        nome: z.string(),
        cpf: z.string(),
        data_nascimento: z.string(),
        rua: z.string(),
        bairro: z.string(),
        numero: z.string(),
        complemento: z.string(),
        municipio: z.string(),
        uf: z.string(),
        telefone: z.string(),
        usuario: z.string()
    });

    const { nome, cpf, data_nascimento, rua, bairro, numero, complemento, municipio, uf, telefone, usuario} = clienteSchema.parse(reqBody);

    const cliente = await prisma.clientes.create({
        data: {
            nome,
            cpf,
            data_nascimento: new Date(data_nascimento),
            rua,
            bairro,
            numero,
            complemento,
            municipio,
            uf,
            telefone,
            createdUser: usuario    
        }
    });

    return cliente.nome;
}

async function updateCliente (reqBody, reqParams) {
    const { id } = reqParams;
    const clienteSchema = z.object({
        nome: z.string(),
        cpf: z.string(),
        data_nascimento: z.string(),
        rua: z.string(),
        bairro: z.string(),
        numero: z.string(),
        complemento: z.string(),
        municipio: z.string(),
        uf: z.string(),
        telefone: z.string(),
    });

    const { nome, cpf, data_nascimento, rua, bairro, numero, complemento, municipio, uf, telefone} = clienteSchema.parse(reqBody);

    await prisma.clientes.update({
        where: {
            id: id
        },
        data: {
            nome,
            cpf,
            data_nascimento: new Date(data_nascimento),
            rua,
            bairro,
            numero,
            complemento,
            municipio,
            uf,
            telefone
        }
    });

    return nome;
}

async function deleteCliente (reqParams) {
    const { id } = reqParams;
    await prisma.clientes.delete({
        where: {
            id: id
        }
    });
}

export default {
    getAllCliente,
    getUniqueCliente,
    createCliente,
    updateCliente,
    deleteCliente
};