import React from 'react'

export default(props) => {
    var number = Math.floor(Math.random() * (props.max - props.min + 1) + props.min); 
    return (
        <div>
            <h2>Aleatory number</h2>
            <p>Número mínimo: {props.min}</p>
            <p>Número máximo: {props.max}</p>
            <p>Número Sorteado entre {props.min} e {props.max} = {number}</p>
        </div>
    )
};