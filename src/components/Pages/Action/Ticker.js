import React from 'react';
import { useLocation } from 'react-router-dom';
import GraphTicker from './GraphTicker';
import HeaderTicker from './HeaderTicker';
import Header from '../../layout/Header';
import InfoTicker from './InfoTicker';

export default (props) => {
    const location = useLocation();
    console.log("location", location);

    let code = "Código do ativo não encontrado"
    let name = "Ativo não encontrado";
    if (location.state.code && location.state.name) {
        name = location.state.name;
        code = location.state.code;
    }

    return (
        <>
        <Header></Header>
        <HeaderTicker code={code} name={name}></HeaderTicker>
        <InfoTicker code={code} name={name}></InfoTicker>
        
        <div>
            {/* <h1>Página de Ativo</h1>
            <p>Ativo: {name}</p>
            <p>Código: {code}</p> */}
            {/* <GraphTicker code={code} name={name}></GraphTicker> */}
        </div>
        </>

    );
};
