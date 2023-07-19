import React from 'react';

export default (props) => {
    // Propriedades passadas por parâmetro são de somente leitura
    const status = props.age >= 18 ? 'Maior idade' : 'Menor idade';

    console.log(props);
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h4>{props.subtitulo}</h4>
            <h4>Minha idade é: {props.age} anos</h4>
            <h4>{status}</h4>
        </div>
    )
} 