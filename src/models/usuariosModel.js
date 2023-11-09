import { prisma } from '../lib/prisma.js';

async function getAllUsuarios () {
    const usuarios = await prisma.usuarios.findMany();
    return usuarios;
}

async function getUniqueUsuarios (reqParams) {
    const { id } = reqParams;
    const usuario = await prisma.usuarios.findUnique({
        where: {
            id: id
        }
    });
    return usuario;
}

async function createUsuarios (reqBody) {
    await prisma.usuarios.create({
        data: {
            nome: reqBody.nome,
            email: reqBody.email,
            senha: reqBody.senha
        }
    });
    return `Usuario ${reqBody.nome} criado com sucesso`;
}

async function updateUsuarios (reqParams, reqBody) {
    await prisma.usuarios.update({
        where: {
            id: reqParams.id
        },
        data: {
            nome: reqBody.nome,
            email: reqBody.email,
            senha: reqBody.senha
        }
    });

    return `Usuario ${reqBody.nome} alterado com sucesso`;
}

async function deleteUsuarios (reqParams) {
    await prisma.usuarios.delete({
        where: {
            id: reqParams.id
        }
    });
    return 'Usuario deletado com sucesso';
}

export default {
    getAllUsuarios,
    getUniqueUsuarios,
    createUsuarios,
    updateUsuarios,
    deleteUsuarios
};