import './Ticker.css'
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GraphTicker from './GraphTicker';
import HeaderTicker from './HeaderTicker';
import Header from '../../layout/Header';
import InfoTicker from './InfoTicker';
import CompanyInfo from './CompanyInfo';
import StopwatchTicker from './StopwatchTicker';
import GraphTickerTradingView from './GraphTickerTradingView'
import MyCalendar from './MyCalendar';
import Cookies from 'js-cookie';
import axios from 'axios';
import Message from "../../layout/Message";

export default (props) => {
    const [haveToken, setHaveToken] = useState(false);

    useEffect(() => {
        getTokenInfo();
    }, []);
    
    async function getTokenInfo() {
        try {
            const token = Cookies.get('token');
        
            if (token && token != undefined && token != null) {
                setHaveToken(true)
            }
        } catch (error) {
          console.error('Erro:', error);
        }
    }

    const [showMessageValid, setshowMessageValid] = useState(false);
    const [showMessageInvalid, setshowMessageInvalid] = useState(false);

    useEffect(() => {
        if (showMessageValid) {
            const timer = setTimeout(() => {
                setshowMessageValid(false);
            }, 5000);
        
            return () => clearTimeout(timer);
        }
    }, [showMessageValid]);

    useEffect(() => {
        if (showMessageInvalid) {
            const timer = setTimeout(() => {
                setshowMessageInvalid(false);
            }, 5000);
        
            return () => clearTimeout(timer);
        }
    }, [showMessageInvalid]);

    const location = useLocation();
    console.log("location", location);

    const [graphVisible, setGraphVisible] = useState(true);
    const [financeVisible, setFinanceVisible] = useState(false);
    const [techVisible, setTechVisible] = useState(false);
    const [aboutVisible, setAboutVisible] = useState(false);
    const [fullCalendar, setFullCalendar] = useState(false);

    const GraphVisible = () => {
        setGraphVisible(true);
        setFinanceVisible(false);
        setTechVisible(false);
        setAboutVisible(false);
        setFullCalendar(false);
    };
    const FinanceVisible = () => {
        setGraphVisible(false);
        setFinanceVisible(true);
        setTechVisible(false);
        setAboutVisible(false);
        setFullCalendar(false);
    };
    const TechVisible = () => {
        setGraphVisible(false);
        setFinanceVisible(false);
        setTechVisible(true);
        setAboutVisible(false);
        setFullCalendar(false);
    };
    const AboutVisible = () => {
        setGraphVisible(false);
        setFinanceVisible(false);
        setTechVisible(false);
        setAboutVisible(true);
        setFullCalendar(false);
    };
    const Calendar = () => {
        setGraphVisible(false);
        setFinanceVisible(false);
        setTechVisible(false);
        setAboutVisible(false);
        setFullCalendar(true);
    };
    
    let code = "Código do ativo não encontrado"
    let name = "Ativo não encontrado";

    if (location.state.code && location.state.name) {
        name = location.state.name;
        code = location.state.code;
    }

    const FavoriteTicker = async () => {
        const email = Cookies.get('email');

        var data = {
            code: code,
            name: name,
            userEmail: email
        }
    
        const response = await axios.post('http://localhost:3030/chatterbot/favorite', data)
      
        if (response.data.status == 500) {
            setshowMessageInvalid(true);
        }

        if (response.data.status == 200) {
            setshowMessageValid(true);
        }
    }

    return (
        <>
        <Header></Header>

        {showMessageValid && <Message valid={true} message={'Ativo adicionado aos favoritos!'} />}
        {showMessageInvalid && <Message valid={false} message={'Erro ao adicionar ativo aos favoritos'} />}

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
                    <li className="nav-item">
                        <button className="nav-link" onClick={Calendar}>Calendário</button>
                    </li>
                    {haveToken && (
                    <li className="nav-item" key="favoritar">
                        <button className="nav-link" onClick={FavoriteTicker}>
                            <img className='favorite-icon' src='https://cdn.icon-icons.com/icons2/1880/PNG/512/iconfinder-love-4341304_120541.png'></img>
                        </button>
                    </li>
                    )}
                </ul>
            </div>
        </nav>

        {graphVisible && 
        <>
            <GraphTickerTradingView code={code} name={name}></GraphTickerTradingView>
            {/* <GraphTicker code={code} name={name}></GraphTicker> */}
        </>
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
        {fullCalendar &&
            <MyCalendar code={code} name={name}></MyCalendar>
        }
        </>

    );
};
