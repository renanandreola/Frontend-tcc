import React from "react";

 export default props => {
     return (
         <div>
            <div>
                <span>Nome: {props.name} / </span>
                <span>Idade: {props.age} / </span>
                <span>Nerd: {props.nerd ? 'Sim' : 'Não'}</span>
            </div>
         </div>
     )
 }