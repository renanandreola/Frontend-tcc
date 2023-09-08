import React from 'react';
import { useLocation } from 'react-router-dom';
import GraphTicker from './GraphTicker';
import HeaderTicker from './HeaderTicker';
import Header from '../../layout/Header';
import InfoTicker from './InfoTicker';
import CompanyInfo from './CompanyInfo';
import StopwatchTicker from './StopwatchTicker';

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
        <GraphTicker code={code} name={name}></GraphTicker>
        <InfoTicker code={code} name={name}></InfoTicker>
        <StopwatchTicker code={code} name={name}></StopwatchTicker>
        <CompanyInfo code={code} name={name}></CompanyInfo>
        
        <div>
            {/* <h1>Página de Ativo</h1>
            <p>Ativo: {name}</p>
            <p>Código: {code}</p> */}
        </div>
        </>

    );
};
