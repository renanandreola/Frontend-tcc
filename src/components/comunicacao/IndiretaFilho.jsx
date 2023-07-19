import React from "react";

 export default props => {

    const min = 18;
    const max = 70;

    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gerarNerd = () => Math.random() > 0.5

     return (
         <div>
            <div>
                Filho
            </div>
            <button onClick={
                function(event) {
                    props.quandoClicar("João", gerarIdade(), gerarNerd())
                }
            }>Fornecer Informações</button>
         </div>
     )
 }