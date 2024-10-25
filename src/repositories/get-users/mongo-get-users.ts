import { IGetUsersRepository } from "controllers/get-users/protocols";
import { User } from "models/user";

export class MongoGetUsersRepository implements IGetUsersRepository{
    async getUsers(): Promise<User[]> {
        // Implementação aqui
        return [{
            firstName: "Klarc",
            lastName: "Almeida",
            email: "klarc@example.com",
            password: "password",
        }]
    }
}