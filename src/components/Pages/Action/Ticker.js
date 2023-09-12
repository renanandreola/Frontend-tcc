import './Ticker.css'
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
        <div className='ticker-menu'>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-secondary">Gráfico</button>
                <button type="button" className="btn btn-secondary">Dados financeiros</button>
                <button type="button" className="btn btn-secondary">Análise técnica</button>
                <button type="button" className="btn btn-secondary">Perfil da empresa</button>
            </div>
        </div>
        <GraphTicker code={code} name={name}></GraphTicker>
        <InfoTicker code={code} name={name}></InfoTicker>
        <StopwatchTicker code={code} name={name}></StopwatchTicker>
        <CompanyInfo code={code} name={name}></CompanyInfo>
        </>

    );
};
