import {pgTable, text, integer, varchar, serial} from "drizzle-orm/pg-core";

export const CadastroAluno = pgTable('cadastroAluno', {
    id: serial('id').primaryKey(),
    nomeAluno: text('nomeAluno').notNull(),
    emailAluno: varchar('emailAluno').notNull(),
    senhaAluno: varchar('senhaAluno', { length: 256 }).notNull(),
})

export const CadastroDocente = pgTable('cadastroDocente', {
    id: serial('id').primaryKey(),
    nomeDocente: text('nomeDocente').notNull(),
    emailDocente: varchar('emailDocente').notNull(),
    senhaDocente: varchar('senhaDocente', { length: 256 }).notNull(),
})