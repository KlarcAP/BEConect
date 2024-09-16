import { client, db } from ".";
import { CadastroAluno, CadastroDocente } from "./schemas";


async function seed(){
    //await db.delete(CadastroAluno);
    //await db.delete(CadastroDocente);


    await db.insert(CadastroAluno).values([
        {nomeAluno: 'Klarc Almeida', emailAluno: 'klarc@example.com', senhaAluno: '123456'},
        {nomeAluno: 'Victor de Jesus', emailAluno: 'victor23@example.com', senhaAluno: '123456'},
        {nomeAluno: 'Makson', emailAluno: 'lordmk@example.com', senhaAluno: '123456'},
        {nomeAluno: 'Gabriel Bispo', emailAluno: 'gabrielbp@example.com', senhaAluno: '123456'},
        {nomeAluno: 'Luís Souza', emailAluno: 'luissouza@example.com', senhaAluno: '123456'},
    ]).returning()

    await db.insert(CadastroDocente).values([
        {nomeDocente: 'Pedro Silva', emailDocente: 'pedro@example.com', senhaDocente: '123456'},
        {nomeDocente: 'Maria da Conceição', emailDocente: 'maria@example.com', senhaDocente: '123456'},
        {nomeDocente: 'Lucas Ribeiro', emailDocente: 'lucas@example.com', senhaDocente: '123456'},
        {nomeDocente: 'João Carlos', emailDocente: 'joao@example.com', senhaDocente: '123456'},
        {nomeDocente: 'Thiago da Silva', emailDocente: 'thiago@example.com', senhaDocente: '123456'},
    ])
}

seed().finally(() => {
    client.end();
});