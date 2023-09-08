import './Header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
  
    const makeSearch = () => {
        console.log(searchTerm);
        navigate('/searchResults', { state: { searchTerm: searchTerm } });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">RA Trading</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register">Cadastro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tickers">Ações</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/action">Ativo</a>
                    </li> */}
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Busque pelo ativo" aria-label="Pesquisar"></input>
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="" onClick={makeSearch}>Pesquisar</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
