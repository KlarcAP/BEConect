import type { FastifyRequest, FastifyReply  } from "fastify";
import { CreateDevProject } from "../services/createProject";

class CreateDevProjectController{

    async FileSystemHandle(request: FastifyRequest, reply: FastifyReply){

        const createDevProject = new CreateDevProject()
        
        const project = await createDevProject.execute();


        reply.send(project);
    }
}

export {CreateDevProjectController};