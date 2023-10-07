-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3),
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdUser" TEXT NOT NULL,

    CONSTRAINT "Clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receitas" (
    "id" TEXT NOT NULL,
    "id_cliente" TEXT NOT NULL,
    "armacao" TEXT NOT NULL,
    "lentes" TEXT NOT NULL,
    "observacao" TEXT NOT NULL,
    "medico" TEXT NOT NULL,
    "otico" TEXT NOT NULL,
    "data_consulta" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdUser" TEXT NOT NULL,
    "d_esf" TEXT NOT NULL,
    "d_cil" TEXT NOT NULL,
    "d_eixo" TEXT NOT NULL,
    "d_add" TEXT NOT NULL,
    "d_dnp" TEXT NOT NULL,
    "e_esf" TEXT NOT NULL,
    "e_cil" TEXT NOT NULL,
    "e_eixo" TEXT NOT NULL,
    "e_add" TEXT NOT NULL,
    "e_dnp" TEXT NOT NULL,

    CONSTRAINT "Receitas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Receitas" ADD CONSTRAINT "Receitas_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
