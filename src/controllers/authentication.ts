import type express from "express";
import { createUser, getUserByEmail } from "server/db/users";
import { random, authentication} from "server/helpers";

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const {email, password, usernamne } = req.body;

        if (!email || !password || !usernamne) {
            return res.sendStatus(400);
        }

        const existingUser = await getUserByEmail(email);

        if (existingUser) {
            return res.sendStatus(400);
        }

        const salt = random();
        const user = await createUser({
            usernamne,
            email,
            authentication: {
                salt,
                password: authentication (salt, password),
            },
        });

        return res.status(200).json(user).end();

    }  catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}