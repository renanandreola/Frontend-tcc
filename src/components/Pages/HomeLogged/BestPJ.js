import './BestPJ.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BestPJ() {
    const [data, setData] = useState([]);
    const [actualPrices, setActualPrices] = useState([]);
    const [justPrices, setJustPrices] = useState([]);

    useEffect(() => {
        getPj();
    }, []);

    async function getPj() {
        try {
            const response = await axios.get('http://localhost:3030/chatterbot/getBestPj')

            const arrayValues = JSON.parse(response.data.results.replace(/'/g, '"'));
            setData(arrayValues);

            let search = {
                codes: arrayValues
            }
            const actualPricesResponse = await axios.post('http://localhost:3030/chatterbot/tickerPriceArray', search);
            const actualPricesData = actualPricesResponse.data.prices;
            setActualPrices(actualPricesData);

            const justPricesResponse = await axios.post('http://localhost:3030/chatterbot/tickerInfoJustPrice', search);
            setJustPrices(justPricesResponse.data.prices);

        } catch (error) {
            console.error('Erro:', error);
        }
    }

    return (
        <div className="pj-tickers">
            <span className="title-favs">Ativos com melhores preços justos</span>
            <span className="title-favs-h1">Ativo | Preço atual | Preço justo</span>

            {data.length > 0 && actualPrices.length > 0 && justPrices.length > 0 ? (
                data.map((action, index) => (
                    <div className="active pj" key={action}>
                        <div className="name">
                            <span className="name-ticker">
                                <strong>{action}</strong> - {actualPrices[index]} - {justPrices[index]}
                            </span>
                        </div>
                    </div>
                ))
            ) : (
                <p>Carregando dados...</p>
            )}
        </div>
    );
}

export default BestPJ;
