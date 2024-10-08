import prismaClient from '../prisma'

class CreateDevProject {
    async execute(){

        console.log("Rota Criada!");

        return{ok: true}
    }
}

export {CreateDevProject};