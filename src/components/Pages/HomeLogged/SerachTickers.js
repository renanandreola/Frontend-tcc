import './SerachTickers.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function SerachTickers() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const makeSearch = () => {
        // console.log(searchTerm);
        navigate('/searchResults', { state: { searchTerm: searchTerm } });
    };

    return (
        <div className="search-tickers">
            <span className="title-favs">Busca de ativos</span>
            <span className="name-ticker">Realize a busca dos ativos desejados para conferir as informações</span>

            <div className='search'>
                <div className="form-inline my-2 my-lg-0 mr-2">
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Busque pelo ativo" aria-label="Pesquisar"></input>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="" onClick={makeSearch}>Pesquisar</button>
                </div>
            </div>
        </div>
    );
}

export default SerachTickers;