import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <div>
            <span>
                <a href='/'>Página Inicial</a>
            </span>
        </div>
        <div>
            <a href='/about'>Sobre</a>
        </div>
        <div>
            <a href='/register'>Cadastro</a>
        </div>
        <div>
            <span>Índices</span>
        </div>
        <div>
            <span>Notícias</span>
        </div>
    </div>
  );
}

export default Header;
