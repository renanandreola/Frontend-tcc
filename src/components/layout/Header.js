import './Header.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
  
    const makeSearch = () => {
        console.log(searchTerm);
      // Realiza a busca com base no searchTerm

      // ...
  
      // Redireciona para a página de resultados com o critério de busca como parâmetro
    //   history.push(`/results?search=${searchTerm}`);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                        <a className="nav-link" href="/actions">Ações</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/action">Ativo</a>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="form-control mr-sm-2" type="search" placeholder="Busca" aria-label="Busca"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="" onClick={makeSearch}>Pesquisar</button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
