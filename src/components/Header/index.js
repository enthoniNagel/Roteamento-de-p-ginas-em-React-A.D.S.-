import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header className="header">
            <h2 className="logo">Menu</h2>
            <nav className="navbar">
                <Link className="nav-link" to="/">Início</Link>
                <Link className="nav-link" to="/jogo_da_velha">Jogo da Velha</Link>
                <Link className="nav-link" to="/nutricao">Nutrição</Link>
                <Link className="nav-link" to="/filme">Buscar Filme</Link>
            </nav>
        </header>
    );
}  

export default Header;
