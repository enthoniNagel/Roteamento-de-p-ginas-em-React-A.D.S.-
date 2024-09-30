import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Nutricao from './pages/Nutricao';
import JoginhoDaVelha from './pages/jogo_da_velha'; 
import Erro from './pages/Erro';
import Filmes from './pages/Filme';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />    
                <Route path="/Nutricao" element={<Nutricao />} />
                <Route path="/Filme" element={<Filmes />} />
                <Route path="/jogo_da_velha" element={<JoginhoDaVelha />} /> 
                <Route path="*" element={<Erro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp; 
