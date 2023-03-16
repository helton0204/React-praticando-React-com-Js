import Cabecalho from "componentes/cabecalho/Cabecalho";
import Container from "componentes/container/Container";
import Rodape from "componentes/rodape/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "pages/favoritos/Favoritos";
import Inicio from "pages/inicio/Inicio";
import NaoEncontrado from "pages/naoEncontrado/NaoEncontrado";
import PaginaBase from "pages/paginabase/Paginabase";
import Player from "pages/player/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase/>}>
                    <Route index element={<Inicio/>}/> 
                    <Route path="favoritos" element={<Favoritos/>}/>
                    <Route path=":id" element={<Player/>}/>
                    <Route path="*" element={<NaoEncontrado/>}/> {/* path="*" em um componente Route significa que ele é um curinga, ou seja, qualquer rota que não corresponder a nenhum dos caminhos especificados nas rotas anteriores será capturada por esse componente.*/}
                </Route>    
            </Routes>
              
        </BrowserRouter>
    )
}
export default AppRoutes;