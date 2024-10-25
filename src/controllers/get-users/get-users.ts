import type { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController{

    constructor(private readonly getUsersRepository: IGetUsersRepository){}
    async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();

            //retornar os resultados
            return {
                statusCode: 200,
                body: users,
            };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            return {
                statusCode: 500,
                body: "Something went wrong",
            };
        } 
    }   
}