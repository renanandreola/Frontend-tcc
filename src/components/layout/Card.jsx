import "./Card.css"
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default (props) => {
    const navigate = useNavigate();

    const goToAction = (code, name) => {
        navigate('/ticker', { state: { code: code, name: name } });
    };

    const cardStyle = {
        backgroundColor: props.color || '#143a87',
        borderColor: props.color || '#143a87'
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">
                {/* {props.title} */}
                <span>{props.code}</span>
            </div>
            <div className="Content">
                {/* {props.children} */}
                <span>{props.name}</span>
            </div>
            <div className="Content">
                <button className='btn btn-dark' onClick={() => goToAction(props.code, props.name)}>Ver ativo</button>
            </div>
        </div>
    )
}