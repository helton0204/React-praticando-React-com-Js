import Cabecalho from "componentes/cabecalho/Cabecalho";
import Container from "componentes/container/Container";
import Rodape from "componentes/rodape/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";

const PaginaBase = () => {
    return(
        <main>
            <Cabecalho/>
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape/>
        </main>
    )
}
export default PaginaBase;