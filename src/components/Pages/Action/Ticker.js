import './Ticker.css'
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GraphTicker from './GraphTicker';
import HeaderTicker from './HeaderTicker';
import Header from '../../layout/Header';
import InfoTicker from './InfoTicker';
import CompanyInfo from './CompanyInfo';
import StopwatchTicker from './StopwatchTicker';
import GraphTickerTradingView from './GraphTickerTradingView'

export default (props) => {
    const location = useLocation();
    console.log("location", location);

    const [graphVisible, setGraphVisible] = useState(true);
    const [financeVisible, setFinanceVisible] = useState(false);
    const [techVisible, setTechVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);

    const GraphVisible = () => {
        setGraphVisible(true);
        setFinanceVisible(false);
        setTechVisible(false);
        setAboutVisible(false);
    };
    const FinanceVisible = () => {
        setGraphVisible(false);
        setFinanceVisible(true);
        setTechVisible(false);
        setAboutVisible(false);
    };
    const TechVisible = () => {
        setGraphVisible(false);
        setFinanceVisible(false);
        setTechVisible(true);
        setAboutVisible(false);
    };
    const AboutVisible = () => {
        setGraphVisible(false);
        setFinanceVisible(false);
        setTechVisible(false);
        setAboutVisible(true);
    };

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="">Visão geral</a> */}
                        <button className="nav-link" onClick={GraphVisible}>Visão geral</button>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="">Dados financeiros</a> */}
                        <button className="nav-link" onClick={FinanceVisible}>Dados financeiros</button>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="">Análise técnica</a> */}
                        <button className="nav-link" onClick={TechVisible}>Análise técnica</button>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="">Sobre a empresa</a> */}
                        <button className="nav-link" onClick={AboutVisible}>Sobre a empresa</button>
                    </li>
                </ul>
            </div>
        </nav>
        {/* <GraphTicker code={code} name={name}></GraphTicker> */}
        {graphVisible && 
            <GraphTickerTradingView code={code} name={name}></GraphTickerTradingView>
        }

        {financeVisible &&
            <InfoTicker code={code} name={name}></InfoTicker>
        }

        {techVisible &&
            <StopwatchTicker code={code} name={name}></StopwatchTicker>
        }

        {aboutVisible &&
            <CompanyInfo code={code} name={name}></CompanyInfo>
        }
        </>

    );
};
