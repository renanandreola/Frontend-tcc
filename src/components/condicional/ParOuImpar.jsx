import React from "react";

export default props => {

    const isPar = props.numero % 2 === 0
    return (
        <div>
            { isPar ? <span>O número {props.numero} é PAR</span> : <span>O número {props.numero} é IMPAR</span>}
        </div>
    )
}