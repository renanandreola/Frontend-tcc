import './Input.css'
import React, {useState} from "react";

export default props => {

    const [valor, setValue] = useState('Inicial');

    function quandoMudar(e) {
        setValue(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {/* Input controlado abaixo */}
                <input type="text" value={valor} onChange={quandoMudar}/>
                <input type="text" value={valor} readOnly/>
                
                {/* Input nao controlado abaixo */}
                <input type="text" value={undefined} />
            </div>
        </div>
    )
}