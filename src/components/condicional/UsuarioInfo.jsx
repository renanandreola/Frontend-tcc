import React from "react";
import If from "./If";

export default props => {
    return (
        <div>
            <If test={props.usuario && props.usuario.nome}>
                <p>Seja bem vindo <strong>{props.usuario.nome}</strong></p>
            </If>

            <If test={!props.usuario || !props.usuario.nome}>
                <p>Seja bem vindo <strong>Desconhecido</strong></p>
            </If>
        </div>
    )
}