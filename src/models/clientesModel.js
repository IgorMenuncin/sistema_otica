import { prisma } from '../lib/prisma.js';
import { z } from 'zod';

async function getAllClientes () {
    const clientes = await prisma.clientes.findMany({
        select: {
            nome: true,
            id: true
        }
    });
    return clientes;
}

async function getUniqueClientes (reqParams) {
    const idSchema = z.object({
        id: z.string().uuid()
    });
    const { id } = idSchema.parse(reqParams);
    const cliente = await prisma.clientes.findUniqueOrThrow({
        where: {
            id: id
        }
    });
    return cliente;
}

async function createClientes (reqBody) {
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
    await prisma.clientes.create({
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
    return `Cliente ${nome} criado com sucesso`;
}

async function updateClientes (reqBody, reqParams) {
    const idSchema = z.object({
        id: z.string().uuid()
    });
    const { id } = idSchema.parse(reqParams);
    
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
    return `Cliente ${nome} atualizado com sucesso`;
}

async function deleteClientes (reqBody) {
    const idSchema = z.object({
        id: z.string().uuid()
    });
    const { id } = idSchema.parse(reqBody);
    await prisma.clientes.delete({
        where: {
            id: id
        }
    });
    return 'Cliente deletado com sucesso';
}

export default {
    getAllClientes,
    getUniqueClientes,
    createClientes,
    updateClientes,
    deleteClientes
};