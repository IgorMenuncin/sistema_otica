function validaErros (error) {
    if (error.name === 'ZodError') {
        const campoIncorreto = error.issues[0].path[0];
        return `Campo ${campoIncorreto} com tipo de dado incorreto`;
    }
    if (error.name === 'NotFoundError') {
        return 'Registro buscado não encontrado';
    }
    if (error.name === 'PrismaClientKnownRequestError') {
        if (error.meta.cause === 'Record to update not found.') {
            return 'Registro a ser alterado não encontrado';
        }
        if (error.meta.cause === 'Record to delete does not exist.') {
            return 'Registro a ser deletado não encontrado';
        }
        return error;
    }
    return error;
}
export default validaErros;