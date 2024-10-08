import { Routes } from "react-router-dom";
import { CreateDevProjectController } from "./controllers/createDevProjectController";
import type {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return{ok: true};
    })

    fastify.post("/createProject", async (request: FastifyRequest, reply: FastifyReply) =>{
        return new CreateDevProjectController().FileSystemHandle(request, reply);
    })
}