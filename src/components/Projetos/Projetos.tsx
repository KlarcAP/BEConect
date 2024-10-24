import React from "react";
import CardProject from "../Cards/CardProject";
import { SideBar } from "../SideBar/SideBar";
import "./Projetos.scss";

export function Projetos(){

    function handleOpen(): void {
        throw new Error("Function not implemented.");
    }

    return(
        <>
            <SideBar /> 
            <div className="container-projetos">           
                <h1>Projetos</h1>
                <div className="content">
                    <CardProject 
                        imageUrl="https://crehana-blog.imgix.net/media/filer_public/57/89/5789c5af-bef0-4a6a-b26f-60d6e8f25a1a/ejemplos-codigos-java-.png"
                        title="Sistema de Gerenciamento de Medicamentos"
                        publisher="Klarc Almeida"
                        playerCount={5}
                        onOpen={handleOpen}
                    />
                </div>
            </div>
        </>
    )
}