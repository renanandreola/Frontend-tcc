import React from 'react';
import { useLocation } from 'react-router-dom';
import ActionWidgetTradingView from './ActionWidgetTradingView';
import Header from '../../layout/Header';

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
        
        <div>
            <h1>Página de Ativo</h1>
            <p>Ativo: {name}</p>
            <p>Código: {code}</p>
            <ActionWidgetTradingView code={code} name={name}></ActionWidgetTradingView>
        </div>
        </>

    );
};
